import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Cabinet, CabinetComponent } from '../utils/types'

export const useCabinetStore = defineStore('cabinet', () => {
  const cabinet = ref<Cabinet | null>(null)
  const selectedComponentId = ref<string | null>(null)
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

  function setCabinet(data: Cabinet) {
    cabinet.value = data
  }

  function selectComponent(id: string | null) {
    selectedComponentId.value = id
  }

  return {
    cabinet,
    selectedComponentId,
    selectedComponent,
    componentList,
    isLoading,
    setCabinet,
    selectComponent,
  }
})