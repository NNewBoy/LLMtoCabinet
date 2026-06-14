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
  right: var(--spacing-lg);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  max-width: 350px;
  width: calc(100% - 32px);
}

.toast {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-lg);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  color: var(--color-text-primary);
  font-size: 13px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  transition: all var(--transition-fast);
}

.toast.success {
  border-color: var(--color-success);
  background: rgba(78, 204, 163, 0.15);
}

.toast.error {
  border-color: var(--color-primary);
  background: rgba(233, 69, 96, 0.15);
}

.toast.warning {
  border-color: var(--color-warning);
  background: rgba(255, 165, 0, 0.15);
}

.toast.info {
  border-color: #4a90d9;
  background: rgba(74, 144, 217, 0.15);
}

.toast-icon {
  font-size: 18px;
  font-weight: bold;
  flex-shrink: 0;
}

.toast.success .toast-icon {
  color: var(--color-success);
}

.toast.error .toast-icon {
  color: var(--color-primary);
}

.toast.warning .toast-icon {
  color: var(--color-warning);
}

.toast.info .toast-icon {
  color: #4a90d9;
}

.toast-message {
  flex: 1;
  line-height: 1.4;
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

/* 移动端适配 */
@media (max-width: 767px) {
  .toast-container {
    top: auto;
    bottom: 80px;
    right: var(--spacing-md);
    left: var(--spacing-md);
    max-width: none;
    width: auto;
  }
}
</style>
