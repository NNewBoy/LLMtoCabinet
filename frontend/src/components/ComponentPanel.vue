<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import { useCabinetStore } from '../stores/cabinetStore'
import { useWebSocketStore } from '../stores/websocketStore'
import type { CabinetComponent } from '../utils/types'
import { apiUrl } from '../config'

const cabinetStore = useCabinetStore()
const wsStore = useWebSocketStore()

// 预设颜色
const presetColors = [
  { name: '原木色', value: '#D2B48C' },
  { name: '白色', value: '#FFFFFF' },
  { name: '深胡桃', value: '#5C3A21' },
  { name: '浅橡木', value: '#C4A882' },
  { name: '灰色', value: '#B0B0B0' },
  { name: '黑色', value: '#333333' },
  { name: '蓝色', value: '#4A90D9' },
  { name: '绿色', value: '#4ECCA3' },
  { name: '红色', value: '#E94560' },
]

// 预设材料
const presetMaterials = [
  { name: '多层板', value: 'plywood' },
  { name: '中密度板', value: 'mdf' },
  { name: '刨花板', value: 'particleboard' },
  { name: '橡木', value: 'oak' },
  { name: '胡桃木', value: 'walnut' },
]

const components = computed(() => {
  return cabinetStore.cabinet?.components || []
})

const selectedComponent = computed(() => {
  return cabinetStore.selectedComponent
})

function selectComponent(id: string) {
  cabinetStore.selectComponent(id === cabinetStore.selectedComponentId ? null : id)
}

function toggleExpand(id: string, event: Event) {
  event.stopPropagation()
  cabinetStore.toggleExpand(id)
}

function isExpanded(id: string): boolean {
  return cabinetStore.isExpanded(id)
}

function hasChildren(comp: CabinetComponent): boolean {
  return comp.children && comp.children.length > 0
}

function getChildrenCount(comp: CabinetComponent): number {
  return comp.children?.length || 0
}

function getComponentTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    side_panel: '侧板',
    back_panel: '背板',
    top_panel: '顶板',
    bottom_panel: '底板',
    shelf: '隔板',
    door: '单开门',
    double_door: '双开门',
    drawer: '抽屉',
    divider: '分隔',
    handle: '拉手',
    custom: '自定义'
  }
  return labels[type] || type
}

function getMaterialLabel(material: string): string {
  const found = presetMaterials.find(m => m.value === material)
  return found ? found.name : material
}

async function updateComponentProperty(componentId: string, properties: Record<string, any>) {
  const projectId = wsStore.currentProjectId
  if (!projectId) return

  try {
    const res = await fetch(apiUrl(`/api/projects/${projectId}/components/${componentId}`), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        component_id: componentId,
        properties: properties
      })
    })

    if (res.ok) {
      const data = await res.json()
      if (data.cabinet) {
        cabinetStore.setCabinet(data.cabinet)
      }
    }
  } catch (e) {
    console.error('修改组件属性失败:', e)
  }
}

async function updateColor(color: string) {
  if (!selectedComponent.value) return
  await updateComponentProperty(selectedComponent.value.id, { color })
}

async function updateMaterial(material: string) {
  if (!selectedComponent.value) return
  await updateComponentProperty(selectedComponent.value.id, { material })
}

// 选中组件时自动滚动到对应位置
const treeContentRef = ref<HTMLElement | null>(null)

watch(() => cabinetStore.selectedComponentId, async (newId) => {
  if (!newId) return
  await nextTick()
  // 找到选中的 tree-item 并滚动到可视区域
  const selectedEl = treeContentRef.value?.querySelector('.tree-item.selected')
  if (selectedEl) {
    selectedEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }
})
</script>

<template>
  <div class="component-panel">
    <div class="tree-section">
      <div class="section-title">组件树</div>
      <div class="tree-content" ref="treeContentRef">
        <div v-if="components.length === 0" class="empty">暂无组件</div>
        <div v-else class="tree">
          <template v-for="comp in components" :key="comp.id">
            <div
              class="tree-item"
              :class="{ selected: cabinetStore.selectedComponentId === comp.id }"
              @click="selectComponent(comp.id)"
            >
              <div class="item-content">
                <button
                  v-if="hasChildren(comp)"
                  class="expand-btn"
                  :class="{ expanded: isExpanded(comp.id) }"
                  @click="toggleExpand(comp.id, $event)"
                >
                  ▶
                </button>
                <span v-else class="expand-placeholder"></span>
                <span class="component-name">{{ comp.name }}</span>
                <span class="component-type">{{ getComponentTypeLabel(comp.type) }}</span>
                <span v-if="hasChildren(comp)" class="children-count">
                  {{ getChildrenCount(comp) }}
                </span>
              </div>
              <div v-if="isExpanded(comp.id) && hasChildren(comp)" class="children">
                <div
                  v-for="child in comp.children"
                  :key="child.id"
                  class="tree-item child"
                  :class="{ selected: cabinetStore.selectedComponentId === child.id }"
                  @click.stop="selectComponent(child.id)"
                >
                  <div class="item-content">
                    <button
                      v-if="hasChildren(child)"
                      class="expand-btn"
                      :class="{ expanded: isExpanded(child.id) }"
                      @click="toggleExpand(child.id, $event)"
                    >
                      ▶
                    </button>
                    <span v-else class="expand-placeholder"></span>
                    <span class="component-name">{{ child.name }}</span>
                    <span class="component-type">{{ getComponentTypeLabel(child.type) }}</span>
                  </div>
                  <div v-if="isExpanded(child.id) && hasChildren(child)" class="children">
                    <div
                      v-for="grandchild in child.children"
                      :key="grandchild.id"
                      class="tree-item grandchild"
                      :class="{ selected: cabinetStore.selectedComponentId === grandchild.id }"
                      @click.stop="selectComponent(grandchild.id)"
                    >
                      <div class="item-content">
                        <span class="expand-placeholder"></span>
                        <span class="component-name">{{ grandchild.name }}</span>
                        <span class="component-type">{{ getComponentTypeLabel(grandchild.type) }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

    <div class="detail-section">
      <div class="section-title">属性</div>
      <div class="detail-content">
        <div v-if="selectedComponent" class="properties">
          <div class="prop-row">
            <span class="prop-label">名称</span>
            <span class="prop-value">{{ selectedComponent.name }}</span>
          </div>
          <div class="prop-row">
            <span class="prop-label">类型</span>
            <span class="prop-value">{{ getComponentTypeLabel(selectedComponent.type) }}</span>
          </div>
          <div class="prop-row">
            <span class="prop-label">尺寸</span>
            <span class="prop-value">
              {{ selectedComponent.length }} × {{ selectedComponent.height }} × {{ selectedComponent.width }} mm
            </span>
          </div>
          <div class="prop-row">
            <span class="prop-label">位置</span>
            <span class="prop-value">
              X:{{ selectedComponent.position.x }}
              Y:{{ selectedComponent.position.y }}
              Z:{{ selectedComponent.position.z }}
            </span>
          </div>
          <div class="prop-row">
            <span class="prop-label">材料</span>
            <select
              class="prop-select"
              :value="selectedComponent.material"
              @change="updateMaterial(($event.target as HTMLSelectElement).value)"
            >
              <option v-for="mat in presetMaterials" :key="mat.value" :value="mat.value">
                {{ mat.name }}
              </option>
            </select>
          </div>
          <div class="prop-row color-row">
            <span class="prop-label">颜色</span>
            <div class="color-picker">
              <div
                v-for="color in presetColors"
                :key="color.value"
                class="color-option"
                :class="{ active: selectedComponent.color === color.value }"
                :style="{ background: color.value }"
                :title="color.name"
                @click="updateColor(color.value)"
              ></div>
            </div>
          </div>
        </div>
        <div v-else class="empty-hint">
          点击组件查看属性
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.component-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: transparent;
}

.section-title {
  font-size: 10px;
  font-weight: 600;
  color: var(--color-text-muted);
  padding: var(--spacing-md) var(--spacing-lg);
  background: rgba(15, 23, 42, 0.4);
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 1px solid var(--glass-border);
}

.tree-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-bottom: 1px solid var(--glass-border);
}

.tree-content {
  flex: 1;
  overflow-y: auto;
  padding: var(--spacing-sm);
}

.detail-section {
  height: 300px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.detail-content {
  flex: 1;
  overflow-y: auto;
  padding: var(--spacing-sm);
}

.empty {
  color: var(--color-text-muted);
  text-align: center;
  margin-top: var(--spacing-2xl);
  font-size: 13px;
}

.tree {
  font-size: 12px;
}

.tree-item {
  margin-bottom: 2px;
}

.tree-item.selected > .item-content {
  background: linear-gradient(135deg, rgba(129, 140, 248, 0.3) 0%, rgba(129, 140, 248, 0.15) 100%);
  border-color: rgba(129, 140, 248, 0.3);
}

.item-content {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
  min-height: 36px;
  border: 1px solid transparent;
}

.item-content:hover {
  background: var(--glass-bg-hover);
  border-color: var(--glass-border);
}

.tree-item.selected > .item-content:hover {
  background: linear-gradient(135deg, rgba(129, 140, 248, 0.4) 0%, rgba(129, 140, 248, 0.2) 100%);
}

.expand-btn {
  background: none;
  border: none;
  color: var(--color-text-muted);
  cursor: pointer;
  padding: 8px;
  margin: -8px;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  transition: all var(--transition-fast);
  border-radius: var(--radius-sm);
}

.expand-btn:hover {
  background: var(--glass-bg);
  color: var(--color-text-secondary);
}

.expand-btn.expanded {
  transform: rotate(90deg);
}

.tree-item.selected .expand-btn {
  color: var(--color-primary);
}

.expand-placeholder {
  width: 18px;
}

.component-name {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--color-text-primary);
}

.component-type {
  font-size: 10px;
  color: var(--color-text-muted);
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  padding: 2px 8px;
  border-radius: var(--radius-sm);
}

.tree-item.selected .component-type {
  background: rgba(129, 140, 248, 0.2);
  border-color: rgba(129, 140, 248, 0.3);
  color: var(--color-primary);
}

.children-count {
  font-size: 10px;
  color: var(--color-success);
  background: rgba(52, 211, 153, 0.1);
  border: 1px solid rgba(52, 211, 153, 0.2);
  padding: 2px 8px;
  border-radius: var(--radius-sm);
}

.tree-item.selected .children-count {
  background: rgba(52, 211, 153, 0.2);
  border-color: rgba(52, 211, 153, 0.3);
}

.children {
  padding-left: var(--spacing-lg);
}

.grandchild {
  padding-left: var(--spacing-md);
}

.properties {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.prop-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--glass-border);
  transition: background var(--transition-fast);
}

.prop-row:hover {
  background: var(--glass-bg);
}

.prop-label {
  color: var(--color-text-muted);
  min-width: 40px;
}

.prop-value {
  color: var(--color-text-primary);
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.prop-select {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: var(--color-text-primary);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  font-size: 12px;
  cursor: pointer;
  outline: none;
  transition: all var(--transition-fast);
  backdrop-filter: blur(8px);
}

.prop-select:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary-glow);
}

.prop-select option {
  background: #1e293b;
  color: var(--color-text-primary);
}

.color-row {
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-md);
}

.color-picker {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  width: 100%;
}

.color-option {
  width: 28px;
  height: 28px;
  border-radius: var(--radius-md);
  border: 2px solid transparent;
  cursor: pointer;
  transition: all var(--transition-fast);
  position: relative;
}

.color-option:hover {
  transform: scale(1.15);
  border-color: var(--glass-border-hover);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.color-option.active {
  border-color: var(--color-primary);
  box-shadow: 0 0 12px var(--color-primary-glow);
}

.color-option.active::after {
  content: '✓';
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  font-weight: bold;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.empty-hint {
  color: var(--color-text-muted);
  font-size: 13px;
  margin-top: var(--spacing-2xl);
  text-align: center;
}

/* 移动端适配 */
@media (max-width: 767px) {
  .section-title {
    padding: var(--spacing-xs) var(--spacing-sm);
    font-size: 9px;
  }

  .tree-section {
    flex: 1;
  }

  .tree-content {
    padding: var(--spacing-xs);
  }

  .detail-section {
    height: 232px;
  }

  .detail-content {
    padding: var(--spacing-xs);
  }

  .item-content {
    min-height: 36px;
    padding: var(--spacing-xs) var(--spacing-sm);
    gap: var(--spacing-xs);
  }

  .expand-btn {
    width: 14px;
    height: 14px;
  }

  .expand-placeholder {
    width: 14px;
  }

  .component-name {
    font-size: 11px;
  }

  .component-type {
    font-size: 9px;
    padding: 1px 4px;
  }

  .children-count {
    font-size: 9px;
    padding: 1px 4px;
  }

  .children {
    padding-left: var(--spacing-sm);
  }

  .grandchild {
    padding-left: var(--spacing-xs);
  }

  .prop-row {
    padding: var(--spacing-xs) var(--spacing-sm);
    font-size: 11px;
  }

  .prop-select {
    padding: var(--spacing-xs) var(--spacing-sm);
    font-size: 11px;
  }

  .color-option {
    width: 24px;
    height: 24px;
  }

  .color-picker {
    gap: 4px;
  }
}
</style>
