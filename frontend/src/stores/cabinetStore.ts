import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Cabinet, CabinetComponent } from '../utils/types'

export const useCabinetStore = defineStore('cabinet', () => {
  const cabinet = ref<Cabinet | null>(null)
  const selectedComponentId = ref<string | null>(null)
  const expandedIds = ref<Set<string>>(new Set())
  const isLoading = ref(false)

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

  return {
    cabinet,
    selectedComponentId,
    selectedComponent,
    componentList,
    expandedIds,
    isLoading,
    setCabinet,
    selectComponent,
    findParentIds,
    toggleExpand,
    isExpanded,
  }
})
