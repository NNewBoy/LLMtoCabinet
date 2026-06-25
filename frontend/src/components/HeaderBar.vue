<script setup lang="ts">
import { useWebSocketStore, showToast } from '../stores/websocketStore'
import { useCabinetStore } from '../stores/cabinetStore'
import { useViewportStore } from '../stores/viewportStore'
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { apiUrl } from '../config'
import RenderModal from './RenderModal.vue'

const wsStore = useWebSocketStore()
const cabinetStore = useCabinetStore()
const viewportStore = useViewportStore()
const projectName = computed(() => cabinetStore.cabinet?.name || '标准柜')
const canUndo = ref(false)
const canRedo = ref(false)
const showRenderModal = ref(false)
const showToolsPopover = ref(false)

// 工具栏配置
const toolItems = [
  { action: 'explode' as const, label: '爆炸图', icon: '💥', stateKey: 'isExploded' as const },
  { action: 'transparent' as const, label: '透视图', icon: '👁', stateKey: 'isTransparent' as const },
  { action: 'doors' as const, label: '开门', icon: '🚪', stateKey: 'doorsOpen' as const },
  { action: 'axes' as const, label: '坐标系', icon: '📐', stateKey: 'isAxesVisible' as const },
  { action: 'grid' as const, label: '网格', icon: '🔲', stateKey: 'isGridVisible' as const },
  { action: 'shadow' as const, label: '阴影', icon: '🌗', stateKey: 'isShadowVisible' as const },
]

function handleToolClick(action: string) {
  viewportStore.toggle(action as any)
}

async function fetchHistoryStatus() {
  if (!wsStore.currentProjectId) {
    canUndo.value = false
    canRedo.value = false
    return
  }
  try {
    const res = await fetch(apiUrl(`/api/projects/${wsStore.currentProjectId}/history`))
    if (res.ok) {
      const data = await res.json()
      canUndo.value = data.can_undo
      canRedo.value = data.can_redo
    }
  } catch {
    canUndo.value = false
    canRedo.value = false
  }
}

// 键盘快捷键
function handleKeyboard(event: KeyboardEvent) {
  if (event.ctrlKey || event.metaKey) {
    if (event.key === 'z' && !event.shiftKey) {
      event.preventDefault()
      handleUndo()
    } else if (event.key === 'y' || (event.key === 'z' && event.shiftKey)) {
      event.preventDefault()
      handleRedo()
    }
  }
}

onMounted(() => {
  fetchHistoryStatus()
  window.addEventListener('keydown', handleKeyboard)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyboard)
})

watch(() => wsStore.currentProjectId, () => {
  fetchHistoryStatus()
})

watch(() => cabinetStore.cabinet, () => {
  fetchHistoryStatus()
}, { deep: true })

function handleUndo() {
  cabinetStore.undo()
}

function handleRedo() {
  cabinetStore.redo()
}

async function handleSave() {
  try {
    const res = await fetch(apiUrl(`/api/projects/${wsStore.currentProjectId}`), { method: 'PUT' })
    if (res.ok) {
      showToast('保存成功', 'success')
      wsStore.refreshSchemeList()
    } else {
      showToast('保存失败', 'error')
    }
  } catch (e) {
    console.error('保存方案失败:', e)
    showToast('保存失败', 'error')
  }
}

function openRenderModal() {
  cabinetStore.selectComponent(null)
  showRenderModal.value = true
}

defineExpose({ fetchHistoryStatus })
</script>

<template>
  <header class="header-bar">
    <div class="header-left">
      <div class="logo-wrapper">
        <h1 class="logo">Cabinet3D</h1>
      </div>
      <span class="project-name">{{ projectName }}</span>
    </div>
    <div class="header-center">
      <el-button
        class="btn"
        @click="handleUndo"
        :disabled="!wsStore.isConnected || !canUndo"
        title="撤销"
      >
        <span class="btn-icon">↩</span>
        <span class="btn-label">撤销</span>
      </el-button>
      <el-button
        class="btn"
        @click="handleRedo"
        :disabled="!wsStore.isConnected || !canRedo"
        title="重做"
      >
        <span class="btn-icon">↪</span>
        <span class="btn-label">重做</span>
      </el-button>
      <el-button class="btn btn-save" @click="handleSave">
        <span class="btn-icon">💾</span>
        <span class="btn-label">保存</span>
      </el-button>
      <el-button class="btn btn-render" @click="openRenderModal">
        <span class="btn-icon">🖼</span>
        <span class="btn-label">渲染</span>
      </el-button>
      <el-popover
        :visible="showToolsPopover"
        placement="bottom"
        :width="200"
        trigger="click"
        :show-arrow="false"
        popper-class="tools-popover"
        @update:visible="(val: boolean) => showToolsPopover = val"
      >
        <template #reference>
          <el-button class="btn btn-tools" :class="{ active: showToolsPopover }">
            <span class="btn-icon">🛠</span>
            <span class="btn-label">工具</span>
          </el-button>
        </template>
        <div class="tools-list">
          <div
            v-for="item in toolItems"
            :key="item.action"
            class="tools-option"
            :class="{ selected: viewportStore[item.stateKey] }"
            @click="handleToolClick(item.action)"
          >
            <span class="tools-option-icon">{{ item.icon }}</span>
            <span class="tools-option-label">{{ item.label }}</span>
            <span v-if="viewportStore[item.stateKey]" class="tools-option-check">✓</span>
          </div>
          <div class="tools-divider"></div>
          <div class="tools-option tools-option-reset" @click="handleToolClick('resetAll')">
            <span class="tools-option-icon">↺</span>
            <span class="tools-option-label">复原</span>
          </div>
        </div>
      </el-popover>
    </div>
    <div class="header-right">
      <span class="status" :class="{ connected: wsStore.isConnected }">
        <span class="status-dot"></span>
        <span class="status-text">{{ wsStore.isConnected ? '已连接' : '未连接' }}</span>
      </span>
    </div>
  </header>
  <RenderModal :visible="showRenderModal" @close="showRenderModal = false" />
</template>

<style scoped>
.header-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--spacing-lg);
  height: 56px;
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--glass-border);
  flex-shrink: 0;
  position: relative;
  z-index: 10;
}

.header-bar::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(129, 140, 248, 0.05) 0%, transparent 100%);
  pointer-events: none;
}

.header-left {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  position: relative;
  z-index: 1;
}

.logo-wrapper {
  position: relative;
}

.logo {
  font-size: 20px;
  font-weight: 700;
  background: linear-gradient(135deg, var(--color-primary) 0%, #a78bfa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
}

.project-name {
  font-size: 13px;
  color: var(--color-text-secondary);
  display: none;
  padding-left: var(--spacing-md);
  border-left: 1px solid var(--glass-border);
}

.header-center {
  display: flex;
  gap: var(--spacing-sm);
  position: relative;
  z-index: 1;
}

.header-center .el-button {
  margin-left: 0;  
}

.btn {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  min-height: 36px;
  backdrop-filter: blur(8px);
  position: relative;
  overflow: hidden;
  background: var(--glass-bg);
  border-color: var(--glass-border);
  color: var(--color-text-primary);
}

.btn:hover:not(:disabled) {
  background: var(--glass-bg-hover);
  border-color: var(--glass-border-hover);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  color: var(--color-text-primary);
}

.btn-label {
  display: none;
  position: relative;
  z-index: 1;
}

.btn-icon {
  font-size: 15px;
  position: relative;
  z-index: 1;
}

.btn-save {
  background: rgba(52, 211, 153, 0.15);
  border-color: rgba(52, 211, 153, 0.3);
  color: var(--color-success);
}

.btn-save:hover {
  background: rgba(52, 211, 153, 0.25);
  border-color: rgba(52, 211, 153, 0.5);
}

.btn-render {
  background: rgba(251, 191, 36, 0.15);
  border-color: rgba(251, 191, 36, 0.3);
  color: var(--color-warning);
}

.btn-render:hover {
  background: rgba(251, 191, 36, 0.25);
  border-color: rgba(251, 191, 36, 0.5);
}

.btn-tools {
  background: rgba(129, 140, 248, 0.15);
  border-color: rgba(129, 140, 248, 0.3);
  color: var(--color-primary);
}

.btn-tools:hover {
  background: rgba(129, 140, 248, 0.25);
  border-color: rgba(129, 140, 248, 0.5);
}

.btn-tools.active {
  background: rgba(129, 140, 248, 0.3);
  border-color: var(--color-primary);
}

.header-right {
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
}

.status {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: 12px;
  color: var(--color-text-muted);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-text-muted);
  transition: all var(--transition-normal);
}

.status.connected .status-dot {
  background: var(--color-success);
  box-shadow: 0 0 8px var(--color-success-glow);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 8px var(--color-success-glow);
  }
  50% {
    box-shadow: 0 0 16px var(--color-success-glow);
  }
}

.status.connected {
  color: var(--color-success);
}

.status-text {
  display: none;
}

/* 移动端优化 */
@media (max-width: 767px) {
  .header-bar {
    height: 44px;
    padding: 0 var(--spacing-sm);
  }

  .logo {
    font-size: 16px;
  }

  .header-center {
    gap: var(--spacing-xs);
  }

  .btn {
    min-height: 32px;
  }
}

/* 平板及以上显示更多内容 */
@media (min-width: 768px) {
  .project-name {
    display: block;
  }

  .btn-label {
    display: inline;
  }

  .status-text {
    display: inline;
  }
}
</style>

<style>
.tools-popover {
  --el-popover-padding: 8px !important;
  background: rgba(15, 23, 42, 0.95) !important;
  border: 1px solid rgba(148, 163, 184, 0.15) !important;
  backdrop-filter: blur(16px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4) !important;
}

.tools-list {
  display: flex;
  flex-direction: column;
}

.tools-option {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 6px;
  color: #94a3b8;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s;
  user-select: none;
}

.tools-option:hover {
  background: rgba(30, 41, 59, 0.7);
  color: #f1f5f9;
}

.tools-option.selected {
  background: rgba(129, 140, 248, 0.12);
  color: #818cf8;
}

.tools-option-icon {
  font-size: 14px;
  width: 18px;
  text-align: center;
  flex-shrink: 0;
}

.tools-option-label {
  flex: 1;
  white-space: nowrap;
}

.tools-option-check {
  font-size: 12px;
  color: #818cf8;
  font-weight: 600;
  flex-shrink: 0;
}

.tools-divider {
  height: 1px;
  background: rgba(148, 163, 184, 0.1);
  margin: 4px 0;
}

.tools-option-reset {
  color: #f87171;
}

.tools-option-reset:hover {
  background: rgba(248, 113, 113, 0.12);
  color: #fca5a5;
}
</style>
