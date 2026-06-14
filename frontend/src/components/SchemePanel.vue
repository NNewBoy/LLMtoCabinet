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
}

.action-bar {
  display: flex;
  gap: 6px;
  padding: 8px 10px;
  border-bottom: 1px solid #0f3460;
}

.name-input {
  flex: 1;
  padding: 5px 8px;
  border: 1px solid #0f3460;
  border-radius: 4px;
  background: #1a1a2e;
  color: #e0e0e0;
  font-size: 12px;
  outline: none;
}

.name-input:focus {
  border-color: #e94560;
}

.action-btn {
  padding: 5px 10px;
  border: 1px solid #0f3460;
  border-radius: 4px;
  background: #1a1a2e;
  color: #e0e0e0;
  cursor: pointer;
  font-size: 12px;
  white-space: nowrap;
  transition: all 0.15s;
}

.action-btn:hover {
  background: #0f3460;
}

.action-btn.create {
  border-color: #4ecca3;
  color: #4ecca3;
}

.scheme-list {
  flex: 1;
  overflow-y: auto;
  padding: 8px;
}

.empty {
  color: #555;
  text-align: center;
  margin-top: 40px;
  font-size: 13px;
}

.scheme-item {
  padding: 8px 10px;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 4px;
  transition: background 0.15s;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.scheme-item:hover {
  background: #0f3460;
}

.scheme-item.current {
  background: #e94560;
  color: white;
}

.scheme-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.rename-input {
  flex: 1;
  padding: 2px 6px;
  border: 1px solid #4ecca3;
  border-radius: 3px;
  background: #1a1a2e;
  color: #e0e0e0;
  font-size: 12px;
  outline: none;
}

.action-icon-btn,
.delete-btn {
  background: none;
  border: none;
  color: #888;
  font-size: 14px;
  cursor: pointer;
  padding: 0 4px;
  line-height: 1;
  display: none;
}

.scheme-item:hover .action-icon-btn,
.scheme-item:hover .delete-btn {
  display: block;
}

.action-icon-btn:hover {
  color: #4ecca3;
}

.delete-btn:hover {
  color: #e94560;
}

.scheme-name {
  font-size: 13px;
}

.scheme-time {
  font-size: 11px;
  color: #888;
  white-space: nowrap;
}

.scheme-item.current .scheme-time {
  color: rgba(255, 255, 255, 0.7);
}
</style>
