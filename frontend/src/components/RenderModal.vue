<script setup lang="ts">
import { ref, reactive, onMounted, watch, computed } from 'vue'
import { ElColorPicker } from 'element-plus'
import 'element-plus/es/components/color-picker/style/css'
import { apiUrl } from '../config'
import { useCabinetStore } from '../stores/cabinetStore'

const props = defineProps<{ visible: boolean }>()
const emit = defineEmits<{ (e: 'close'): void }>()

const cabinetStore = useCabinetStore()

// 渲染类型
const renderStyle = ref<'single' | 'scene'>('single')

// 预设数据
const styles = ref<{ value: string; label: string }[]>([])
const lightings = ref<{ value: string; label: string }[]>([])
const viewAngles = ref<{ value: string; label: string }[]>([])
const roomTypes = ref<{ value: string; label: string }[]>([])
const materials = ref<{ value: string; label: string }[]>([])

// 表单
const form = reactive({
  imageAngle: 'front',
  style: '',
  lighting: '',
  viewAngle: '',
  roomType: '',
  material: '',
  color: '#8B7355',
  bgColor: '#FFFFFF',
  description: '',
})

// 柜子尺寸
const cabinetWidth = computed(() => cabinetStore.cabinet?.length || 800)
const cabinetHeight = computed(() => cabinetStore.cabinet?.height || 2000)
const cabinetDepth = computed(() => cabinetStore.cabinet?.width || 600)

// 截图状态
const screenshotUrl = ref('')
const isCapturing = ref(false)

// 加载预设数据
async function loadPresets() {
  try {
    const res = await fetch(apiUrl('/render_api/params/presets'))
    if (res.ok) {
      const data = (await res.json())?.data || {}
      styles.value = data.styles || []
      lightings.value = data.lighting || []
      viewAngles.value = data.view_angles || []
      roomTypes.value = data.room_types || []
      materials.value = data.materials || []
      // 默认选中第一个
      if (styles.value.length) form.style = styles.value[0].value
      if (lightings.value.length) form.lighting = lightings.value[0].value
      if (viewAngles.value.length) form.viewAngle = viewAngles.value[0].value
      if (roomTypes.value.length) form.roomType = roomTypes.value[0].value
      if (materials.value.length) form.material = materials.value[0].value
    }
  } catch (e) {
    console.error('加载渲染预设失败:', e)
  }
}

// 进入渲染模式并截图
let renderModeActive = false

function setAngleAndCapture(angle: 'front' | 'top' | 'side_45') {
  form.imageAngle = angle
  isCapturing.value = true

  if (!renderModeActive) {
    // 首次：进入渲染模式（关闭视觉干扰+背景白+设置角度）
    window.dispatchEvent(new CustomEvent('enter-render-mode', { detail: { angle } }))
    renderModeActive = true
  } else {
    // 后续角度切换：只调整相机
    window.dispatchEvent(new CustomEvent('enter-render-mode', { detail: { angle } }))
  }

  // 等待两帧渲染完成后再截图
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const canvas = document.querySelector('canvas') as HTMLCanvasElement | null
      if (!canvas) {
        isCapturing.value = false
        return
      }
      try {
        screenshotUrl.value = canvas.toDataURL('image/png')
      } catch (e) {
        console.error('截图失败:', e)
      }
      isCapturing.value = false
    })
  })
}

// 将 data URL 转换为 File 对象
function dataUrlToFile(dataUrl: string, filename: string): File {
  const [meta, base64] = dataUrl.split(',')
  const mime = meta.match(/:(.*?);/)?.[1] || 'image/png'
  const binary = atob(base64)
  const arr = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) {
    arr[i] = binary.charCodeAt(i)
  }
  return new File([arr], filename, { type: mime })
}

// 上传截图到后端获取 image_id
async function uploadScreenshot(): Promise<string> {
  if (!screenshotUrl.value) return ''
  try {
    const file = dataUrlToFile(screenshotUrl.value, 'screenshot.png')
    const formData = new FormData()
    formData.append('file', file)
    const res = await fetch(apiUrl('/render_api/images/upload'), {
      method: 'POST',
      body: formData,
    })
    if (res.ok) {
      const data = await res.json()
      return data.data?.image_id || ''
    }
  } catch (e) {
    console.error('上传截图失败:', e)
  }
  return ''
}

// 提交渲染
async function handleSubmit() {
  let imageId = ''

  // 上传截图获取 image_id
  if (screenshotUrl.value) {
    imageId = await uploadScreenshot()
  }

  // 构建查询参数
  const params = new URLSearchParams()
  if (imageId) params.set('image_id', imageId)
  if (form.style) params.set('style', form.style)
  if (form.lighting) params.set('lighting', form.lighting)
  if (form.viewAngle) params.set('view_angle', form.viewAngle)
  if (renderStyle.value === 'scene' && form.roomType) {
    params.set('room_type', form.roomType)
  }
  if (form.material) params.set('material', form.material)
  if (form.color) params.set('color', form.color)
  if (renderStyle.value === 'single' && form.bgColor) {
    params.set('bg_color', form.bgColor)
  }
  if (form.description) params.set('description', form.description)
  params.set('width', String(Math.round(cabinetWidth.value)))
  params.set('height', String(Math.round(cabinetHeight.value)))
  params.set('depth', String(Math.round(cabinetDepth.value)))

  const path = renderStyle.value === 'single' ? '/llmimagerender/render/single' : '/llmimagerender/render/scene'
  // 本地开发跳转到 5173 端口，生产环境使用当前 origin
  const origin = import.meta.env.DEV
    ? `${window.location.protocol}//${window.location.hostname}:5175`
    : window.location.origin
  const url = `${origin}${path}?${params.toString()}`
  // 非PC端直接在当前页面加载
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  if (isMobile) {
    window.location.href = url
  } else {
    window.open(url, '_blank')
  }
}

// 弹窗打开时加载预设并截图，关闭时恢复视图
watch(() => props.visible, (val) => {
  if (val) {
    renderModeActive = false
    loadPresets()
    setAngleAndCapture('front')
  }
})

function close() {
  // 退出渲染模式，恢复视图状态
  if (renderModeActive) {
    window.dispatchEvent(new CustomEvent('exit-render-mode'))
    renderModeActive = false
  }
  emit('close')
}
</script>

<template>
  <Teleport to="body">
    <div v-if="visible" class="modal-overlay" @click.self="close">
      <div class="modal-container">
        <div class="modal-header">
          <h2 class="modal-title">渲染设置</h2>
          <button class="modal-close" @click="close">&times;</button>
        </div>

        <div class="modal-body">
          <!-- 渲染类型 -->
          <div class="form-group">
            <label class="form-label">渲染类型</label>
            <div class="toggle-group">
              <button
                class="toggle-btn"
                :class="{ active: renderStyle === 'single' }"
                @click="renderStyle = 'single'"
              >单品渲染</button>
              <button
                class="toggle-btn"
                :class="{ active: renderStyle === 'scene' }"
                @click="renderStyle = 'scene'"
              >场景渲染</button>
            </div>
          </div>

          <!-- 截图预览与角度选择 -->
          <div class="form-group">
            <label class="form-label">3D 视图截图</label>
            <div class="screenshot-area">
              <div v-if="screenshotUrl" class="screenshot-preview">
                <img :src="screenshotUrl" alt="截图预览" />
              </div>
              <div v-else class="screenshot-placeholder">
                {{ isCapturing ? '截图中...' : '暂无截图' }}
              </div>
              <div class="angle-buttons">
                <button
                  class="angle-btn"
                  :class="{ active: form.imageAngle === 'front' }"
                  @click="setAngleAndCapture('front')"
                >正面</button>
                <button
                  class="angle-btn"
                  :class="{ active: form.imageAngle === 'top' }"
                  @click="setAngleAndCapture('top')"
                >顶视</button>
                <button
                  class="angle-btn"
                  :class="{ active: form.imageAngle === 'side_45' }"
                  @click="setAngleAndCapture('side_45')"
                >侧面45°</button>
              </div>
            </div>
          </div>

          <!-- 渲染风格 -->
          <div class="form-group">
            <label class="form-label">渲染风格</label>
            <select v-model="form.style" class="form-select">
              <option v-for="s in styles" :key="s.value" :value="s.value">{{ s.label }}</option>
            </select>
          </div>

          <!-- 光照条件 -->
          <div class="form-group">
            <label class="form-label">光照条件</label>
            <select v-model="form.lighting" class="form-select">
              <option v-for="l in lightings" :key="l.value" :value="l.value">{{ l.label }}</option>
            </select>
          </div>

          <!-- 视角 -->
          <div class="form-group">
            <label class="form-label">视角</label>
            <select v-model="form.viewAngle" class="form-select">
              <option v-for="v in viewAngles" :key="v.value" :value="v.value">{{ v.label }}</option>
            </select>
          </div>

          <!-- 户型（场景渲染专属） -->
          <div v-if="renderStyle === 'scene'" class="form-group">
            <label class="form-label">户型</label>
            <select v-model="form.roomType" class="form-select">
              <option v-for="r in roomTypes" :key="r.value" :value="r.value">{{ r.label }}</option>
            </select>
          </div>

          <!-- 柜体材质 -->
          <div class="form-group">
            <label class="form-label">柜体材质</label>
            <select v-model="form.material" class="form-select">
              <option v-for="m in materials" :key="m.value" :value="m.value">{{ m.label }}</option>
            </select>
          </div>

          <!-- 颜色 -->
          <div class="form-group">
            <label class="form-label">颜色</label>
            <ElColorPicker v-model="form.color" show-alpha />
          </div>

          <!-- 背景颜色（单品渲染专属） -->
          <div v-if="renderStyle === 'single'" class="form-group">
            <label class="form-label">背景颜色</label>
            <ElColorPicker v-model="form.bgColor" show-alpha />
          </div>

          <!-- 额外描述 -->
          <div class="form-group">
            <label class="form-label">额外描述</label>
            <textarea
              v-model="form.description"
              class="form-textarea"
              rows="2"
              placeholder="输入渲染的额外描述..."
            ></textarea>
          </div>

          <!-- 尺寸信息 -->
          <div class="form-group">
            <label class="form-label">柜子尺寸 (mm)</label>
            <div class="size-info">
              <div class="size-item">
                <span class="size-label">宽</span>
                <span class="size-value">{{ Math.round(cabinetWidth) }}</span>
              </div>
              <div class="size-item">
                <span class="size-label">高</span>
                <span class="size-value">{{ Math.round(cabinetHeight) }}</span>
              </div>
              <div class="size-item">
                <span class="size-label">深</span>
                <span class="size-value">{{ Math.round(cabinetDepth) }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn-cancel" @click="close">取消</button>
          <button class="btn-submit" @click="handleSubmit">提交渲染</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-container {
  width: 480px;
  max-height: 85vh;
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  backdrop-filter: blur(16px);
  display: flex;
  flex-direction: column;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-lg) var(--spacing-xl);
  border-bottom: 1px solid var(--glass-border);
}

.modal-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0;
}

.modal-close {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: var(--color-text-muted);
  font-size: 20px;
  cursor: pointer;
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
}

.modal-close:hover {
  background: var(--glass-bg-hover);
  color: var(--color-text-primary);
}

.modal-body {
  flex: 1;
  overflow-y: auto;
  padding: var(--spacing-lg) var(--spacing-xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.form-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.form-select {
  padding: 8px 12px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  color: var(--color-text-primary);
  font-size: 13px;
  font-family: inherit;
  outline: none;
  cursor: pointer;
  transition: all var(--transition-fast);
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M3 5l3 3 3-3' fill='none' stroke='%2394a3b8' stroke-width='1.5'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  padding-right: 30px;
}

.form-select:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary-glow);
}

.form-select option {
  background: #1e293b;
  color: var(--color-text-primary);
}

.form-textarea {
  padding: 8px 12px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  color: var(--color-text-primary);
  font-size: 13px;
  font-family: inherit;
  resize: vertical;
  outline: none;
  transition: all var(--transition-fast);
}

.form-textarea:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary-glow);
}

.form-textarea::placeholder {
  color: var(--color-text-muted);
}

/* 渲染类型切换 */
.toggle-group {
  display: flex;
  gap: var(--spacing-xs);
}

.toggle-btn {
  flex: 1;
  padding: 8px 12px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  color: var(--color-text-secondary);
  font-size: 13px;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.toggle-btn:hover {
  background: var(--glass-bg-hover);
}

.toggle-btn.active {
  background: rgba(129, 140, 248, 0.2);
  border-color: var(--color-primary);
  color: var(--color-primary);
}

/* 截图区域 */
.screenshot-area {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.screenshot-preview {
  width: 100%;
  height: 160px;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--glass-border);
  background: rgba(0, 0, 0, 0.3);
}

.screenshot-preview img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.screenshot-placeholder {
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  border: 1px dashed var(--glass-border);
  color: var(--color-text-muted);
  font-size: 13px;
}

.angle-buttons {
  display: flex;
  gap: var(--spacing-xs);
}

.angle-btn {
  flex: 1;
  padding: 6px 10px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-sm);
  color: var(--color-text-secondary);
  font-size: 12px;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.angle-btn:hover {
  background: var(--glass-bg-hover);
}

.angle-btn.active {
  background: rgba(129, 140, 248, 0.15);
  border-color: var(--color-primary);
  color: var(--color-primary);
}

/* 尺寸信息 */
.size-info {
  display: flex;
  gap: var(--spacing-md);
}

.size-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: 6px 12px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-sm);
}

.size-label {
  font-size: 11px;
  color: var(--color-text-muted);
}

.size-value {
  font-size: 13px;
  font-weight: 600;
  color: var(--color-text-primary);
}

/* 底部按钮 */
.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-xl);
  border-top: 1px solid var(--glass-border);
}

.btn-cancel {
  padding: 8px 20px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  color: var(--color-text-secondary);
  font-size: 13px;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.btn-cancel:hover {
  background: var(--glass-bg-hover);
  color: var(--color-text-primary);
}

.btn-submit {
  padding: 8px 20px;
  background: linear-gradient(135deg, var(--color-primary) 0%, #a78bfa 100%);
  border: none;
  border-radius: var(--radius-md);
  color: white;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.btn-submit:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 16px var(--color-primary-glow);
}

.btn-submit:active {
  transform: translateY(0);
}

/* 移动端适配 */
@media (max-width: 767px) {
  .modal-container {
    width: 95%;
    max-height: 90vh;
  }

  .modal-header,
  .modal-body,
  .modal-footer {
    padding-left: var(--spacing-md);
    padding-right: var(--spacing-md);
  }
}
</style>
