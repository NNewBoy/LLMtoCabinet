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
  background: var(--color-bg-secondary);
}

.action-bar {
  display: flex;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  border-bottom: 1px solid var(--color-border);
  background: var(--color-bg-tertiary);
}

.name-input {
  flex: 1;
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-bg-primary);
  color: var(--color-text-primary);
  font-size: 13px;
  outline: none;
  transition: border-color var(--transition-fast);
}

.name-input:focus {
  border-color: var(--color-primary);
}

.action-btn {
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-bg-primary);
  color: var(--color-text-primary);
  cursor: pointer;
  font-size: 13px;
  white-space: nowrap;
  transition: all var(--transition-fast);
  min-height: 44px;
}

.action-btn:hover {
  background: var(--color-bg-tertiary);
}

.action-btn.create {
  border-color: var(--color-success);
  color: var(--color-success);
}

.action-btn.create:hover {
  background: var(--color-success);
  color: var(--color-bg-primary);
}

.scheme-list {
  flex: 1;
  overflow-y: auto;
  padding: var(--spacing-sm);
}

.empty {
  color: var(--color-text-muted);
  text-align: center;
  margin-top: var(--spacing-xl);
  font-size: 13px;
}

.scheme-item {
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  cursor: pointer;
  margin-bottom: var(--spacing-xs);
  transition: background var(--transition-fast);
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 44px;
}

.scheme-item:hover {
  background: var(--color-bg-tertiary);
}

.scheme-item.current {
  background: var(--color-primary);
  color: white;
}

.scheme-actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.rename-input {
  flex: 1;
  padding: var(--spacing-xs) var(--spacing-sm);
  border: 1px solid var(--color-success);
  border-radius: var(--radius-sm);
  background: var(--color-bg-primary);
  color: var(--color-text-primary);
  font-size: 13px;
  outline: none;
}

.action-icon-btn,
.delete-btn {
  background: none;
  border: none;
  color: var(--color-text-muted);
  font-size: 16px;
  cursor: pointer;
  padding: var(--spacing-xs);
  line-height: 1;
  display: none;
  min-width: 28px;
  min-height: 28px;
  align-items: center;
  justify-content: center;
}

.scheme-item:hover .action-icon-btn,
.scheme-item:hover .delete-btn {
  display: flex;
}

.action-icon-btn:hover {
  color: var(--color-success);
}

.delete-btn:hover {
  color: var(--color-primary);
}

.scheme-name {
  font-size: 13px;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
    min-height: 48px;
    padding: var(--spacing-md);
  }

  .action-icon-btn,
  .delete-btn {
    display: flex;
    min-width: 36px;
    min-height: 36px;
  }

  .name-input {
    font-size: 16px; /* 防止 iOS 自动缩放 */
  }
}
</style>
