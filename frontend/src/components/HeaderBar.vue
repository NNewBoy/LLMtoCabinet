<script setup lang="ts">
import { useWebSocketStore, showToast } from '../stores/websocketStore'
import { useCabinetStore } from '../stores/cabinetStore'
import { useViewportStore } from '../stores/viewportStore'
import { useThemeStore } from '../stores/theme'
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { apiUrl } from '../config'
import RenderModal from './RenderModal.vue'
import {
  RefreshLeft, RefreshRight, FolderChecked, Picture,
  Tools, Check, Refresh, Expand, View, Open, Aim, Grid, Cloudy,
  Sunny, Moon,
} from '@element-plus/icons-vue'

const wsStore = useWebSocketStore()
const cabinetStore = useCabinetStore()
const viewportStore = useViewportStore()
const themeStore = useThemeStore()
const tipEffect = computed(() => (themeStore.theme === 'light' ? 'light' : 'dark'))
const projectName = computed(() => cabinetStore.cabinet?.name || '标准柜')
const canUndo = ref(false)
const canRedo = ref(false)
const showRenderModal = ref(false)
const showToolsPopover = ref(false)

// 工具栏配置
const toolItems = [
  { action: 'explode' as const, label: '爆炸图', icon: Expand, stateKey: 'isExploded' as const },
  { action: 'transparent' as const, label: '透视图', icon: View, stateKey: 'isTransparent' as const },
  { action: 'doors' as const, label: '开门', icon: Open, stateKey: 'doorsOpen' as const },
  { action: 'axes' as const, label: '坐标系', icon: Aim, stateKey: 'isAxesVisible' as const },
  { action: 'grid' as const, label: '网格', icon: Grid, stateKey: 'isGridVisible' as const },
  { action: 'shadow' as const, label: '阴影', icon: Cloudy, stateKey: 'isShadowVisible' as const },
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
  <header class="header-bar glass">
    <div class="header-left">
      <div class="logo-wrapper">
        <h1 class="logo">Cabinet3D</h1>
      </div>
      <span class="project-name">{{ projectName }}</span>
    </div>
    <div class="header-center">
      <el-tooltip content="撤销" :effect="tipEffect" placement="bottom">
        <button
          class="btn btn-undo"
          @click="handleUndo"
          :disabled="!wsStore.isConnected || !canUndo"
        >
          <el-icon :size="18" class="btn-icon"><RefreshLeft /></el-icon>
        </button>
      </el-tooltip>
      <el-tooltip content="重做" :effect="tipEffect" placement="bottom">
        <button
          class="btn btn-redo"
          @click="handleRedo"
          :disabled="!wsStore.isConnected || !canRedo"
        >
          <el-icon :size="18" class="btn-icon"><RefreshRight /></el-icon>
        </button>
      </el-tooltip>
      <el-tooltip content="保存" :effect="tipEffect" placement="bottom">
        <button class="btn btn-save" @click="handleSave">
          <el-icon :size="18" class="btn-icon"><FolderChecked /></el-icon>
        </button>
      </el-tooltip>
      <el-tooltip content="渲染" :effect="tipEffect" placement="bottom">
        <button class="btn btn-render" @click="openRenderModal">
          <el-icon :size="18" class="btn-icon"><Picture /></el-icon>
        </button>
      </el-tooltip>
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
          <button class="btn btn-tools" :class="{ active: showToolsPopover }">
            <el-icon :size="18" class="btn-icon"><Tools /></el-icon>
          </button>
        </template>
        <div class="tools-list">
          <div
            v-for="item in toolItems"
            :key="item.action"
            class="tools-option"
            :class="{ selected: viewportStore[item.stateKey] }"
            @click="handleToolClick(item.action)"
          >
            <el-icon class="tools-option-icon"><component :is="item.icon" /></el-icon>
            <span class="tools-option-label">{{ item.label }}</span>
            <el-icon v-if="viewportStore[item.stateKey]" class="tools-option-check"><Check /></el-icon>
          </div>
          <div class="tools-divider"></div>
          <div class="tools-option tools-option-reset" @click="handleToolClick('resetAll')">
            <el-icon class="tools-option-icon"><Refresh /></el-icon>
            <span class="tools-option-label">复原</span>
          </div>
        </div>
      </el-popover>
      <el-tooltip :content="themeStore.isDark ? '切换到浅色' : '切换到暗色'" :effect="tipEffect" placement="bottom">
        <button class="btn btn-theme" @click="themeStore.toggleTheme()">
          <el-icon :size="18" class="btn-icon">
            <Sunny v-if="themeStore.isDark" />
            <Moon v-else />
          </el-icon>
        </button>
      </el-tooltip>
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
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 0 var(--spacing-lg);
  height: 56px;
  border-radius: 0;
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
  justify-self: start;
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
  justify-self: center;
  position: relative;
  z-index: 1;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xs);
  width: 36px;
  height: 36px;
  position: relative;
  overflow: hidden;
  padding: 0;
  border-radius: 10px;
  border: 1px solid transparent;
  background: transparent;
  color: var(--color-text-mute);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn:disabled {
  cursor: not-allowed;
  color: var(--color-text-disabled);
}

.btn:hover:not(:disabled) {
  color: var(--color-primary-hover);
  background: var(--btn-bg);
  border-color: var(--btn-border-color);
}


.btn-label {
  display: none;
  position: relative;
  z-index: 1;
}

.btn-icon {
  position: relative;
  z-index: 1;
}

.btn-undo {
  color: var(--color-primary);
}

.btn-redo {
  color: var(--color-primary);
}

.btn-save {
  color: var(--color-success);
}
.btn.btn-save:hover {
  color: var(--color-success);
  background: rgba(52, 211, 153, 0.25);
  border-color: rgba(52, 211, 153, 0.5);
}

.btn-render {
  color: var(--color-warning);
}
.btn.btn-render:hover {
  color: var(--color-warning);
  background: rgba(251, 191, 36, 0.25);
  border-color: rgba(251, 191, 36, 0.5);
}

.btn-theme .btn-icon {
  transition: transform 0.3s ease;
}
.btn-theme:hover .btn-icon {
  transform: rotate(30deg);
}

.header-right {
  display: flex;
  align-items: center;
  justify-self: end;
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
    gap: 0;
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
  background: var(--bg-glass-solid) !important;
  border: 1px solid var(--glass-border) !important;
  backdrop-filter: blur(16px);
  box-shadow: var(--glass-shadow-lg) !important;
}

.tools-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.tools-option {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 6px;
  color: var(--color-text-secondary);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s;
  user-select: none;
}

.tools-option:hover {
  background: var(--glass-bg-hover);
  color: var(--color-text-primary);
}

.tools-option.selected {
  background: rgba(129, 140, 248, 0.12);
  color: var(--color-primary);
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
  color: var(--color-primary);
  font-weight: 600;
  flex-shrink: 0;
}

.tools-divider {
  height: 1px;
  background: var(--glass-border);
}

.tools-option-reset {
  color: var(--color-error);
}

.tools-option-reset:hover {
  background: rgba(248, 113, 113, 0.12);
  color: var(--color-error);
}

.tools-option.disabled {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}

/* 撤销/重做仅在移动端工具弹窗中显示 */
@media (min-width: 768px) {
  .tools-history-item,
  .tools-history-divider {
    display: none;
  }
}
</style>
