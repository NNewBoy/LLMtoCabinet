<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useCabinetStore } from '../stores/cabinetStore'
import { useWebSocketStore } from '../stores/websocketStore'

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
    const res = await fetch(`/api/projects/${pid}/snapshots`)
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
    const res = await fetch(`/api/projects/${pid}/snapshots/${index}/restore`, { method: 'POST' })
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
}

.snapshot-list {
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

.snapshot-item {
  padding: 8px 10px;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 4px;
  transition: background 0.15s;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.snapshot-item:hover {
  background: #0f3460;
}

.snapshot-item.current {
  background: #e94560;
  color: white;
}

.snap-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.snap-index {
  font-weight: 600;
  font-size: 12px;
  color: #4ecca3;
}

.snapshot-item.current .snap-index {
  color: #fff;
}

.snap-desc {
  font-size: 12px;
  max-width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.snap-time {
  font-size: 11px;
  color: #888;
}

.snapshot-item.current .snap-time {
  color: rgba(255, 255, 255, 0.7);
}
</style>
