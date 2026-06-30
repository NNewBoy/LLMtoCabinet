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
  top: 72px;
  left: var(--spacing-xl);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  max-width: 380px;
  width: calc(100% - 48px);
}

.toast {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  background: var(--bg-glass-solid);
  border: 1px solid var(--glass-border);
  color: var(--color-text-primary);
  font-size: 13px;
  cursor: pointer;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;
}

.toast::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, transparent 100%);
  pointer-events: none;
}

.toast:hover {
  transform: translateX(4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
}

.toast.success {
  border-color: rgba(52, 211, 153, 0.3);
  background: linear-gradient(135deg, rgba(52, 211, 153, 0.15) 0%, var(--bg-glass-solid) 100%);
}

.toast.error {
  border-color: rgba(248, 113, 113, 0.3);
  background: linear-gradient(135deg, rgba(248, 113, 113, 0.15) 0%, var(--bg-glass-solid) 100%);
}

.toast.warning {
  border-color: rgba(251, 191, 36, 0.3);
  background: linear-gradient(135deg, rgba(251, 191, 36, 0.15) 0%, var(--bg-glass-solid) 100%);
}

.toast.info {
  border-color: rgba(129, 140, 248, 0.3);
  background: linear-gradient(135deg, rgba(129, 140, 248, 0.15) 0%, var(--bg-glass-solid) 100%);
}

.toast-icon {
  font-size: 20px;
  font-weight: bold;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
}

.toast.success .toast-icon {
  background: rgba(52, 211, 153, 0.2);
  color: var(--color-success);
}

.toast.error .toast-icon {
  background: rgba(248, 113, 113, 0.2);
  color: var(--color-error);
}

.toast.warning .toast-icon {
  background: rgba(251, 191, 36, 0.2);
  color: var(--color-warning);
}

.toast.info .toast-icon {
  background: rgba(129, 140, 248, 0.2);
  color: var(--color-primary);
}

.toast-message {
  flex: 1;
  line-height: 1.5;
  position: relative;
  z-index: 1;
}

/* PC端动画 - 从左边弹出 */
.toast-enter-active {
  animation: slideInLeft 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.toast-leave-active {
  animation: slideOutLeft 0.3s cubic-bezier(0.4, 0, 1, 1);
}

@keyframes slideInLeft {
  from {
    transform: translateX(-120%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOutLeft {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-120%);
    opacity: 0;
  }
}

/* 移动端适配 - 从上面弹出 */
@media (max-width: 767px) {
  .toast-container {
    top: var(--spacing-lg);
    left: var(--spacing-lg);
    right: var(--spacing-lg);
    bottom: auto;
    max-width: none;
    width: auto;
  }

  .toast {
    padding: var(--spacing-md);
    font-size: 14px;
  }

  .toast:hover {
    transform: translateY(-4px);
  }

  /* 移动端动画 - 从上面弹出 */
  .toast-enter-active {
    animation: slideInTop 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .toast-leave-active {
    animation: slideOutTop 0.3s cubic-bezier(0.4, 0, 1, 1);
  }

  @keyframes slideInTop {
    from {
      transform: translateY(-120%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideOutTop {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-120%);
      opacity: 0;
    }
  }
}
</style>
