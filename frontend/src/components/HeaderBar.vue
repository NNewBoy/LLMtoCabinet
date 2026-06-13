<script setup lang="ts">
import { useWebSocketStore } from '../stores/websocketStore'
import { ref } from 'vue'

const wsStore = useWebSocketStore()
const projectName = ref('标准橱柜')

function handleUndo() {
  wsStore.sendChatMessage('撤销上一步操作')
}

function handleRedo() {
  wsStore.sendChatMessage('重做上一步操作')
}
</script>

<template>
  <header class="header-bar">
    <div class="header-left">
      <h1 class="logo">Cabinet3D</h1>
      <span class="project-name">{{ projectName }}</span>
    </div>
    <div class="header-center">
      <button class="btn" @click="handleUndo" :disabled="!wsStore.isConnected">↩ 撤销</button>
      <button class="btn" @click="handleRedo" :disabled="!wsStore.isConnected">↪ 重做</button>
    </div>
    <div class="header-right">
      <span class="status" :class="{ connected: wsStore.isConnected }">
        {{ wsStore.isConnected ? '● 已连接' : '○ 未连接' }}
      </span>
    </div>
  </header>
</template>

<style scoped>
.header-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 48px;
  background: #16213e;
  border-bottom: 1px solid #0f3460;
  flex-shrink: 0;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo {
  font-size: 18px;
  font-weight: 700;
  color: #e94560;
}

.project-name {
  font-size: 14px;
  color: #a0a0b0;
}

.header-center {
  display: flex;
  gap: 8px;
}

.btn {
  padding: 6px 14px;
  border: 1px solid #0f3460;
  border-radius: 6px;
  background: #1a1a2e;
  color: #e0e0e0;
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s;
}

.btn:hover:not(:disabled) {
  background: #0f3460;
  border-color: #e94560;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.header-right {
  display: flex;
  align-items: center;
}

.status {
  font-size: 12px;
  color: #888;
}

.status.connected {
  color: #4ecca3;
}
</style>