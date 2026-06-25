<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useCabinetStore } from '../stores/cabinetStore'
import { useWebSocketStore } from '../stores/websocketStore'
import { useChatStore } from '../stores/chatStore'
import { apiUrl } from '../config'

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
const selectedTemplate = ref('cabinet')
const editingId = ref<string | null>(null)
const editingName = ref('')

const templates = [
  { value: 'cabinet', label: '标准柜' },
  { value: 'kitchen', label: '厨柜' },
  { value: 'wardrobe', label: '衣柜' },
  { value: 'bookshelf', label: '书架' },
]

async function loadSchemes() {
  try {
    const res = await fetch(apiUrl('/api/projects'))
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
  if (id === wsStore.currentProjectId) return

  try {
    wsStore.stopCurrentConversation(false)
    chatStore.clearMessages()
    wsStore.disconnect()

    const res = await fetch(apiUrl(`/api/projects/${id}`))
    const data = await res.json()
    if (data.cabinet) {
      cabinetStore.setCabinet(data.cabinet)
      wsStore.connect(id)
    }
  } catch (e) {
    console.error('切换方案失败:', e)
  }
}

async function createScheme() {
  const name = newName.value.trim() || '新方案'
  const template = selectedTemplate.value
  newName.value = ''
  try {
    const res = await fetch(apiUrl(`/api/projects?name=${encodeURIComponent(name)}&template=${encodeURIComponent(template)}`), { method: 'POST' })
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
    await fetch(apiUrl(`/api/projects/${id}`), { method: 'DELETE' })
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
    await fetch(apiUrl(`/api/projects/${id}?name=${encodeURIComponent(name)}`), { method: 'PUT' })
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
      <div class="input-group">
        <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>
        <el-input
          v-model="newName"
          class="name-input"
          placeholder="新方案名称..."
          @keydown.enter="createScheme"
        />
      </div>
      <div class="action-row">
        <div class="template-group">
          <svg class="template-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
          <el-select v-model="selectedTemplate" class="template-select">
            <el-option v-for="t in templates" :key="t.value" :label="t.label" :value="t.value" />
          </el-select>
        </div>
        <el-button class="action-btn create" type="primary" @click="createScheme">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>
          <span>新建</span>
        </el-button>
      </div>
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
          <el-input
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
  flex-direction: column;
  gap: 10px;
  padding: 16px;
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.6) 0%, rgba(30, 41, 59, 0.4) 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px) saturate(1.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
  position: relative;
}

.action-bar::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.15) 50%, transparent 100%);
}

.input-group {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 12px;
  width: 16px;
  height: 16px;
  color: var(--color-text-muted);
  pointer-events: none;
  transition: color 200ms ease;
  z-index: 1;
}

.input-group:focus-within .input-icon {
  color: #22C55E;
}

.name-input {
  width: 100%;
}

.name-input :deep(.el-input__wrapper) {
  padding-left: 38px;
}

.action-row {
  display: flex;
  gap: 10px;
  align-items: center;
}

.template-group {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
}

.template-icon {
  position: absolute;
  left: 12px;
  width: 16px;
  height: 16px;
  color: var(--color-text-muted);
  pointer-events: none;
  transition: color 200ms ease;
  z-index: 1;
}

.template-group:focus-within .template-icon {
  color: #818CF8;
}

.template-select {
  width: 100%;
}

.template-select :deep(.el-select__wrapper) {
  padding-left: 38px;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  white-space: nowrap;
  backdrop-filter: blur(8px);
  background: rgba(15, 23, 42, 0.5);
  border-color: rgba(255, 255, 255, 0.08);
  color: var(--color-text-primary);
}

.btn-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.action-btn:hover {
  border-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.action-btn.create {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0.08) 100%);
  border-color: rgba(34, 197, 94, 0.25);
  color: #22C55E;
}

.action-btn.create:hover {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.25) 0%, rgba(34, 197, 94, 0.12) 100%);
  border-color: rgba(34, 197, 94, 0.45);
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
}

.rename-input :deep(.el-input__wrapper) {
  border-color: var(--color-primary);
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
  .action-bar {
    padding: 10px;
    gap: 8px;
  }

  .name-input {
    font-size: 16px;
  }

  .action-btn {
    padding: 8px 14px;
    font-size: 12px;
  }

  .template-select {
    font-size: 12px;
  }

  .btn-icon {
    width: 14px;
    height: 14px;
  }

  .scheme-list {
    padding: var(--spacing-xs);
  }

  .scheme-item {
    min-height: 40px;
    padding: var(--spacing-xs) var(--spacing-sm);
    margin-bottom: var(--spacing-xs);
  }

  .scheme-name {
    font-size: 12px;
  }

  .scheme-time {
    font-size: 10px;
  }

  .scheme-actions {
    gap: var(--spacing-xs);
  }

  .action-icon-btn,
  .delete-btn {
    display: flex;
    min-width: 28px;
    min-height: 28px;
    font-size: 12px;
  }

  .rename-input {
    padding: var(--spacing-xs) var(--spacing-sm);
    font-size: 12px;
  }
}
</style>
