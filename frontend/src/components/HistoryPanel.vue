<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useCabinetStore } from '../stores/cabinetStore'
import { useWebSocketStore } from '../stores/websocketStore'
import { apiUrl } from '../config'

interface Snapshot {
  index: number
  description: string
  timestamp: number
}

const cabinetStore = useCabinetStore()
const wsStore = useWebSocketStore()
const snapshots = ref<Snapshot[]>([])
const currentIndex = ref(-1)

async function loadSnapshots() {
  const pid = wsStore.currentProjectId
  if (!pid) return
  try {
    const res = await fetch(apiUrl(`/api/projects/${pid}/snapshots`))
    const data = await res.json()
    snapshots.value = data.snapshots || []
    currentIndex.value = data.current_index ?? -1
  } catch (e) {
    console.error('加载快照列表失败:', e)
  }
}

async function restoreSnapshot(index: number) {
  const pid = wsStore.currentProjectId
  if (!pid) return
  try {
    const res = await fetch(apiUrl(`/api/projects/${pid}/snapshots/${index}/restore`), { method: 'POST' })
    const data = await res.json()
    if (data.success && data.cabinet) {
      cabinetStore.setCabinet(data.cabinet)
      currentIndex.value = index
    }
  } catch (e) {
    console.error('恢复快照失败:', e)
  }
}

function formatTime(ts: number): string {
  const d = new Date(ts * 1000)
  return d.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
}

onMounted(() => {
  loadSnapshots()
})

watch(() => wsStore.currentProjectId, () => {
  loadSnapshots()
})

watch(() => cabinetStore.cabinet, () => {
  loadSnapshots()
}, { deep: true })
</script>

<template>
  <div class="history-panel">
    <div class="snapshot-list">
      <div v-if="snapshots.length === 0" class="empty">暂无历史记录</div>
      <div
        v-for="snap in [...snapshots].reverse()"
        :key="snap.index"
        class="snapshot-item"
        :class="{ current: snap.index === currentIndex }"
        @click="restoreSnapshot(snap.index)"
      >
        <div class="snap-info">
          <span class="snap-index">v{{ snap.index + 1 }}</span>
          <span class="snap-desc">{{ snap.description }}</span>
        </div>
        <span class="snap-time">{{ formatTime(snap.timestamp) }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.history-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: transparent;
}

.snapshot-list {
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

.snapshot-item {
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  cursor: pointer;
  margin-bottom: var(--spacing-sm);
  transition: all var(--transition-fast);
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 48px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(8px);
}

.snapshot-item:hover {
  background: var(--glass-bg-hover);
  border-color: var(--glass-border-hover);
  transform: translateX(4px);
}

.snapshot-item.current {
  background: linear-gradient(135deg, rgba(129, 140, 248, 0.3) 0%, rgba(129, 140, 248, 0.15) 100%);
  border-color: rgba(129, 140, 248, 0.3);
  color: var(--color-primary);
}

.snap-info {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.snap-index {
  font-weight: 600;
  font-size: 12px;
  color: var(--color-primary);
  background: rgba(129, 140, 248, 0.15);
  padding: 4px 8px;
  border-radius: var(--radius-sm);
}

.snapshot-item.current .snap-index {
  background: rgba(129, 140, 248, 0.2);
  color: var(--color-primary);
}

.snap-desc {
  font-size: 12px;
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--color-text-secondary);
}

.snapshot-item.current .snap-desc {
  color: var(--color-primary);
}

.snap-time {
  font-size: 11px;
  color: var(--color-text-muted);
}

.snapshot-item.current .snap-time {
  color: var(--color-primary);
}

/* 移动端适配 */
@media (max-width: 767px) {
  .snapshot-list {
    padding: var(--spacing-xs);
  }

  .snapshot-item {
    min-height: 40px;
    padding: var(--spacing-xs) var(--spacing-sm);
    margin-bottom: var(--spacing-xs);
  }

  .snap-info {
    gap: var(--spacing-xs);
  }

  .snap-index {
    font-size: 10px;
    padding: 2px 6px;
  }

  .snap-desc {
    font-size: 11px;
    max-width: 140px;
  }

  .snap-time {
    font-size: 10px;
  }
}
</style>
