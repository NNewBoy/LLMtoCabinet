<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useCabinetStore } from '../stores/cabinetStore'
import { useWebSocketStore } from '../stores/websocketStore'
import { useChatStore } from '../stores/chatStore'

interface Scheme {
  id: string
  name: string
  created_at: string
  updated_at: string
}

const cabinetStore = useCabinetStore()
const wsStore = useWebSocketStore()
const chatStore = useChatStore()
const schemes = ref<Scheme[]>([])
const newName = ref('')
const editingId = ref<string | null>(null)
const editingName = ref('')

async function loadSchemes() {
  try {
    const res = await fetch('/api/projects')
    schemes.value = await res.json()
  } catch (e) {
    console.error('加载方案列表失败:', e)
  }
}

// 监听 schemeListVersion 变化刷新列表
watch(() => wsStore.schemeListVersion, () => {
  loadSchemes()
})

async function switchScheme(id: string) {
  try {
    const res = await fetch(`/api/projects/${id}`)
    const data = await res.json()
    if (data.cabinet) {
      cabinetStore.setCabinet(data.cabinet)
      chatStore.clearMessages()
      wsStore.disconnect()
      wsStore.connect(id)
    }
  } catch (e) {
    console.error('切换方案失败:', e)
  }
}

async function createScheme() {
  const name = newName.value.trim() || '新方案'
  newName.value = ''
  try {
    const res = await fetch(`/api/projects?name=${encodeURIComponent(name)}`, { method: 'POST' })
    const data = await res.json()
    if (data.id) {
      await loadSchemes()
      await switchScheme(data.id)
    }
  } catch (e) {
    console.error('创建方案失败:', e)
  }
}

async function deleteScheme(id: string, event: Event) {
  event.stopPropagation()
  try {
    await fetch(`/api/projects/${id}`, { method: 'DELETE' })
    await loadSchemes()
  } catch (e) {
    console.error('删除方案失败:', e)
  }
}

function startRename(scheme: Scheme, event: Event) {
  event.stopPropagation()
  editingId.value = scheme.id
  editingName.value = scheme.name
}

async function confirmRename(id: string) {
  const name = editingName.value.trim()
  if (!name) {
    cancelRename()
    return
  }
  try {
    await fetch(`/api/projects/${id}?name=${encodeURIComponent(name)}`, { method: 'PUT' })
    await loadSchemes()
  } catch (e) {
    console.error('重命名失败:', e)
  }
  cancelRename()
}

function cancelRename() {
  editingId.value = null
  editingName.value = ''
}

function formatTime(iso: string): string {
  return new Date(iso).toLocaleString('zh-CN', {
    month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit',
  })
}

onMounted(() => {
  loadSchemes()
})
</script>

<template>
  <div class="scheme-panel">
    <div class="action-bar">
      <input
        v-model="newName"
        class="name-input"
        placeholder="新方案名称..."
        @keydown.enter="createScheme"
      />
      <button class="action-btn create" @click="createScheme">新建</button>
    </div>

    <div class="scheme-list">
      <div v-if="schemes.length === 0" class="empty">暂无方案</div>
      <div
        v-for="scheme in schemes"
        :key="scheme.id"
        class="scheme-item"
        :class="{ current: scheme.id === wsStore.currentProjectId }"
        @click="switchScheme(scheme.id)"
      >
        <div class="scheme-info">
          <input
            v-if="editingId === scheme.id"
            v-model="editingName"
            class="rename-input"
            @click.stop
            @keydown.enter="confirmRename(scheme.id)"
            @keydown.escape="cancelRename"
            @blur="confirmRename(scheme.id)"
            autofocus
          />
          <span v-else class="scheme-name">{{ scheme.name }}</span>
        </div>
        <div class="scheme-actions">
          <span class="scheme-time">{{ formatTime(scheme.updated_at) }}</span>
          <button class="action-icon-btn" @click="startRename(scheme, $event)" title="重命名">✎</button>
          <button class="delete-btn" @click="deleteScheme(scheme.id, $event)" title="删除">×</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scheme-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: transparent;
}

.action-bar {
  display: flex;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--glass-border);
  background: rgba(15, 23, 42, 0.4);
  backdrop-filter: blur(8px);
}

.name-input {
  flex: 1;
  padding: var(--spacing-md);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  background: var(--glass-bg);
  color: var(--color-text-primary);
  font-size: 13px;
  outline: none;
  transition: all var(--transition-fast);
  backdrop-filter: blur(8px);
}

.name-input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary-glow);
}

.name-input::placeholder {
  color: var(--color-text-muted);
}

.action-btn {
  padding: var(--spacing-md) var(--spacing-lg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  background: var(--glass-bg);
  color: var(--color-text-primary);
  cursor: pointer;
  font-size: 13px;
  white-space: nowrap;
  transition: all var(--transition-fast);
  min-height: 44px;
  backdrop-filter: blur(8px);
  position: relative;
  overflow: hidden;
}

.action-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(52, 211, 153, 0) 0%, rgba(52, 211, 153, 0.1) 100%);
  opacity: 0;
  transition: opacity var(--transition-fast);
}

.action-btn:hover {
  background: var(--glass-bg-hover);
  border-color: var(--glass-border-hover);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.action-btn:hover::before {
  opacity: 1;
}

.action-btn.create {
  background: rgba(52, 211, 153, 0.15);
  border-color: rgba(52, 211, 153, 0.3);
  color: var(--color-success);
}

.action-btn.create:hover {
  background: rgba(52, 211, 153, 0.25);
  border-color: rgba(52, 211, 153, 0.5);
  box-shadow: 0 4px 16px rgba(52, 211, 153, 0.2);
}

.scheme-list {
  flex: 1;
  overflow-y: auto;
  padding: var(--spacing-md);
}

.empty {
  color: var(--color-text-muted);
  text-align: center;
  margin-top: var(--spacing-2xl);
  font-size: 13px;
}

.scheme-item {
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  cursor: pointer;
  margin-bottom: var(--spacing-sm);
  transition: all var(--transition-fast);
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 52px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(8px);
}

.scheme-item:hover {
  background: var(--glass-bg-hover);
  border-color: var(--glass-border-hover);
  transform: translateX(4px);
}

.scheme-item.current {
  background: linear-gradient(135deg, rgba(129, 140, 248, 0.3) 0%, rgba(129, 140, 248, 0.15) 100%);
  border-color: rgba(129, 140, 248, 0.3);
  color: white;
}

.scheme-actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.rename-input {
  flex: 1;
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--color-primary);
  border-radius: var(--radius-md);
  background: var(--glass-bg);
  color: var(--color-text-primary);
  font-size: 13px;
  outline: none;
  box-shadow: 0 0 0 3px var(--color-primary-glow);
}

.action-icon-btn,
.delete-btn {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: var(--color-text-muted);
  font-size: 14px;
  cursor: pointer;
  padding: var(--spacing-xs);
  line-height: 1;
  display: none;
  min-width: 32px;
  min-height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.scheme-item:hover .action-icon-btn,
.scheme-item:hover .delete-btn {
  display: flex;
}

.action-icon-btn:hover {
  background: rgba(52, 211, 153, 0.15);
  border-color: rgba(52, 211, 153, 0.3);
  color: var(--color-success);
}

.delete-btn:hover {
  background: rgba(248, 113, 113, 0.15);
  border-color: rgba(248, 113, 113, 0.3);
  color: var(--color-error);
}

.scheme-name {
  font-size: 13px;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--color-text-primary);
}

.scheme-item.current .scheme-name {
  color: white;
}

.scheme-time {
  font-size: 11px;
  color: var(--color-text-muted);
  white-space: nowrap;
}

.scheme-item.current .scheme-time {
  color: rgba(255, 255, 255, 0.7);
}

/* 移动端适配 */
@media (max-width: 767px) {
  .scheme-item {
    min-height: 56px;
    padding: var(--spacing-md) var(--spacing-lg);
  }

  .action-icon-btn,
  .delete-btn {
    display: flex;
    min-width: 40px;
    min-height: 40px;
  }

  .name-input {
    font-size: 16px; /* 防止 iOS 自动缩放 */
  }
}
</style>
