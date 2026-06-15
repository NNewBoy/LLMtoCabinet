import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Cabinet, CabinetComponent } from '../utils/types'
import { apiUrl } from '../config'

// Toast 通知回调（由 App.vue 注入）
let toastCallback: ((message: string, type: string) => void) | null = null

export function setToastCallback(callback: (message: string, type: string) => void) {
  toastCallback = callback
}

function showToast(message: string, type: 'success' | 'error' | 'warning' | 'info' = 'info') {
  if (toastCallback) {
    toastCallback(message, type)
  }
}

export const useCabinetStore = defineStore('cabinet', () => {
  const cabinet = ref<Cabinet | null>(null)
  const selectedComponentId = ref<string | null>(null)
  const expandedIds = ref<Set<string>>(new Set())
  const isLoading = ref(false)
  const currentProjectId = ref(localStorage.getItem('lastProjectId') || 'default')

  const selectedComponent = computed(() => {
    if (!cabinet.value || !selectedComponentId.value) return null
    return findComponentById(cabinet.value, selectedComponentId.value)
  })

  const componentList = computed(() => {
    if (!cabinet.value) return []
    return cabinet.value.components.map(c => ({
      id: c.id,
      name: c.name,
      type: c.type,
    }))
  })

  function findComponentById(cabinet: Cabinet, id: string): CabinetComponent | null {
    for (const comp of cabinet.components) {
      const found = searchRecursive(comp, id)
      if (found) return found
    }
    return null
  }

  function searchRecursive(comp: CabinetComponent, id: string): CabinetComponent | null {
    if (comp.id === id) return comp
    for (const child of comp.children) {
      const found = searchRecursive(child, id)
      if (found) return found
    }
    return null
  }

  // 查找组件的父组件ID列表（用于自动展开）
  function findParentIds(targetId: string): string[] {
    if (!cabinet.value) return []
    const parentIds: string[] = []
    for (const comp of cabinet.value.components) {
      if (findParentRecursive(comp, targetId, parentIds)) {
        return parentIds
      }
    }
    return []
  }

  function findParentRecursive(comp: CabinetComponent, targetId: string, parentIds: string[]): boolean {
    if (comp.id === targetId) return true
    for (const child of comp.children) {
      if (findParentRecursive(child, targetId, parentIds)) {
        parentIds.push(comp.id)
        return true
      }
    }
    return false
  }

  function setCabinet(data: Cabinet) {
    cabinet.value = data
  }

  function selectComponent(id: string | null) {
    selectedComponentId.value = id
    // 选中组件时自动展开父组件
    if (id) {
      const parentIds = findParentIds(id)
      parentIds.forEach(pid => expandedIds.value.add(pid))
    }
  }

  function toggleExpand(id: string) {
    if (expandedIds.value.has(id)) {
      expandedIds.value.delete(id)
    } else {
      expandedIds.value.add(id)
    }
  }

  function isExpanded(id: string): boolean {
    return expandedIds.value.has(id)
  }

  function setProjectId(id: string) {
    currentProjectId.value = id
  }

  async function undo() {
    try {
      const response = await fetch(apiUrl(`/api/projects/${currentProjectId.value}/undo`), {
        method: 'POST',
      })
      const data = await response.json()
      showToast(data.message || (data.success ? '已撤销' : '没有可撤销的操作'), data.success ? 'success' : 'warning')
      if (data.success && data.cabinet) {
        cabinet.value = data.cabinet
      }
    } catch (error) {
      console.error('撤销失败:', error)
      showToast('撤销失败', 'error')
    }
  }

  async function redo() {
    try {
      const response = await fetch(apiUrl(`/api/projects/${currentProjectId.value}/redo`), {
        method: 'POST',
      })
      const data = await response.json()
      showToast(data.message || (data.success ? '已重做' : '没有可重做的操作'), data.success ? 'success' : 'warning')
      if (data.success && data.cabinet) {
        cabinet.value = data.cabinet
      }
    } catch (error) {
      console.error('重做失败:', error)
      showToast('重做失败', 'error')
    }
  }

  return {
    cabinet,
    selectedComponentId,
    selectedComponent,
    componentList,
    expandedIds,
    isLoading,
    currentProjectId,
    setCabinet,
    selectComponent,
    findParentIds,
    toggleExpand,
    isExpanded,
    setProjectId,
    undo,
    redo,
  }
})
