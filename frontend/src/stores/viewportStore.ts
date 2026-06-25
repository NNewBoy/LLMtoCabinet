import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useViewportStore = defineStore('viewport', () => {
  // 工具栏状态
  const isExploded = ref(false)
  const isTransparent = ref(false)
  const doorsOpen = ref(false)
  const isAxesVisible = ref(false)
  const isGridVisible = ref(true)
  const isShadowVisible = ref(true)

  // 事件信号（HeaderBar 触发，Viewport3D 监听）
  const toggleSignal = ref<{ action: string; ts: number } | null>(null)

  function toggle(action: 'explode' | 'transparent' | 'doors' | 'axes' | 'grid' | 'shadow' | 'resetAll') {
    toggleSignal.value = { action, ts: Date.now() }
  }

  return {
    isExploded, isTransparent, doorsOpen,
    isAxesVisible, isGridVisible, isShadowVisible,
    toggleSignal, toggle,
  }
})
