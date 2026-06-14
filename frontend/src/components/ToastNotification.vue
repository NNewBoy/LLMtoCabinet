<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Toast {
  id: number
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
  duration: number
}

const toasts = ref<Toast[]>([])
let nextId = 0

function addToast(message: string, type: Toast['type'] = 'info', duration = 3000) {
  const id = nextId++
  const toast: Toast = { id, message, type, duration }
  toasts.value.push(toast)

  if (duration > 0) {
    setTimeout(() => {
      removeToast(id)
    }, duration)
  }
}

function removeToast(id: number) {
  const index = toasts.value.findIndex(t => t.id === id)
  if (index > -1) {
    toasts.value.splice(index, 1)
  }
}

function getIcon(type: Toast['type']): string {
  switch (type) {
    case 'success': return '✓'
    case 'error': return '✕'
    case 'warning': return '⚠'
    case 'info': return 'ℹ'
  }
}

// 暴露给父组件
defineExpose({ addToast })
</script>

<template>
  <div class="toast-container">
    <TransitionGroup name="toast">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="toast"
        :class="toast.type"
        @click="removeToast(toast.id)"
      >
        <span class="toast-icon">{{ getIcon(toast.type) }}</span>
        <span class="toast-message">{{ toast.message }}</span>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.toast-container {
  position: fixed;
  top: 60px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 350px;
}

.toast {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 8px;
  background: #16213e;
  border: 1px solid #0f3460;
  color: #e0e0e0;
  font-size: 13px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
}

.toast.success {
  border-color: #4ecca3;
  background: rgba(78, 204, 163, 0.15);
}

.toast.error {
  border-color: #e94560;
  background: rgba(233, 69, 96, 0.15);
}

.toast.warning {
  border-color: #ffa500;
  background: rgba(255, 165, 0, 0.15);
}

.toast.info {
  border-color: #4a90d9;
  background: rgba(74, 144, 217, 0.15);
}

.toast-icon {
  font-size: 16px;
  font-weight: bold;
}

.toast.success .toast-icon {
  color: #4ecca3;
}

.toast.error .toast-icon {
  color: #e94560;
}

.toast.warning .toast-icon {
  color: #ffa500;
}

.toast.info .toast-icon {
  color: #4a90d9;
}

.toast-message {
  flex: 1;
}

/* 动画 */
.toast-enter-active {
  animation: slideIn 0.3s ease;
}

.toast-leave-active {
  animation: slideOut 0.3s ease;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOut {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}
</style>
