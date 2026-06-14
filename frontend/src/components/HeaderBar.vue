<script setup lang="ts">
import { useWebSocketStore, showToast } from '../stores/websocketStore'
import { useCabinetStore } from '../stores/cabinetStore'
import { ref, watch, onMounted } from 'vue'

const wsStore = useWebSocketStore()
const cabinetStore = useCabinetStore()
const projectName = ref('标准橱柜')
const canUndo = ref(false)
const canRedo = ref(false)

async function fetchHistoryStatus() {
  if (!wsStore.currentProjectId) {
    canUndo.value = false
    canRedo.value = false
    return
  }
  try {
    const res = await fetch(`/api/projects/${wsStore.currentProjectId}/history`)
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

onMounted(() => {
  fetchHistoryStatus()
})

watch(() => wsStore.currentProjectId, () => {
  fetchHistoryStatus()
})

watch(() => cabinetStore.cabinet, () => {
  fetchHistoryStatus()
}, { deep: true })

function handleUndo() {
  wsStore.sendChatMessage('撤销上一步操作')
}

function handleRedo() {
  wsStore.sendChatMessage('重做上一步操作')
}

async function handleSave() {
  try {
    const res = await fetch(`/api/projects/${wsStore.currentProjectId}`, { method: 'PUT' })
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

defineExpose({ fetchHistoryStatus })
</script>

<template>
  <header class="header-bar">
    <div class="header-left">
      <h1 class="logo">Cabinet3D</h1>
      <span class="project-name">{{ projectName }}</span>
    </div>
    <div class="header-center">
      <button
        class="btn btn-icon"
        @click="handleUndo"
        :disabled="!wsStore.isConnected || !canUndo"
        title="撤销"
      >
        <span class="btn-icon-text">↩</span>
        <span class="btn-label">撤销</span>
      </button>
      <button
        class="btn btn-icon"
        @click="handleRedo"
        :disabled="!wsStore.isConnected || !canRedo"
        title="重做"
      >
        <span class="btn-icon-text">↪</span>
        <span class="btn-label">重做</span>
      </button>
      <button class="btn btn-save" @click="handleSave">
        <span class="btn-icon-text">💾</span>
        <span class="btn-label">保存</span>
      </button>
    </div>
    <div class="header-right">
      <span class="status" :class="{ connected: wsStore.isConnected }">
        <span class="status-dot"></span>
        <span class="status-text">{{ wsStore.isConnected ? '已连接' : '未连接' }}</span>
      </span>
    </div>
  </header>
</template>

<style scoped>
.header-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--spacing-lg);
  height: 48px;
  background: var(--color-bg-secondary);
  border-bottom: 1px solid var(--color-border);
  flex-shrink: 0;
}

.header-left {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.logo {
  font-size: 18px;
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: -0.5px;
}

.project-name {
  font-size: 13px;
  color: var(--color-text-secondary);
  display: none;
}

.header-center {
  display: flex;
  gap: var(--spacing-sm);
}

.btn {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: 6px 12px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-bg-primary);
  color: var(--color-text-primary);
  cursor: pointer;
  font-size: 13px;
  transition: all var(--transition-fast);
  min-height: 36px;
}

.btn:hover:not(:disabled) {
  background: var(--color-bg-tertiary);
  border-color: var(--color-primary);
}

.btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.btn-label {
  display: none;
}

.btn-icon-text {
  font-size: 14px;
}

.btn-save {
  border-color: var(--color-success);
  color: var(--color-success);
}

.btn-save:hover {
  background: var(--color-success);
  color: var(--color-bg-primary);
}

.header-right {
  display: flex;
  align-items: center;
}

.status {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: 12px;
  color: var(--color-text-muted);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-text-muted);
}

.status.connected .status-dot {
  background: var(--color-success);
  box-shadow: 0 0 6px var(--color-success);
}

.status.connected {
  color: var(--color-success);
}

.status-text {
  display: none;
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
