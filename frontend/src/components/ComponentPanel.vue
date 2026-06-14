<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCabinetStore } from '../stores/cabinetStore'
import { useWebSocketStore } from '../stores/websocketStore'
import type { CabinetComponent } from '../utils/types'

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
    door: '门板',
    drawer: '抽屉',
    divider: '分隔',
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
    const res = await fetch(`/api/projects/${projectId}/components/${componentId}`, {
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
</script>

<template>
  <div class="component-panel">
    <div class="tree-section">
      <div class="section-title">组件树</div>
      <div class="tree-content">
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
}

.section-title {
  font-size: 11px;
  font-weight: 600;
  color: #888;
  padding: 6px 12px;
  background: #1a1a2e;
  text-transform: uppercase;
}

.tree-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-bottom: 1px solid #0f3460;
}

.tree-content {
  flex: 1;
  overflow-y: auto;
  padding: 8px;
}

.detail-section {
  height: 280px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.detail-content {
  flex: 1;
  overflow-y: auto;
  padding: 8px;
}

.empty {
  color: #555;
  text-align: center;
  margin-top: 20px;
  font-size: 12px;
}

.tree {
  font-size: 12px;
}

.tree-item {
  margin-bottom: 2px;
}

.tree-item.selected > .item-content {
  background: #e94560;
}

.item-content {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.15s;
}

.item-content:hover {
  background: #0f3460;
}

.tree-item.selected > .item-content:hover {
  background: #e94560;
}

.expand-btn {
  background: none;
  border: none;
  color: #888;
  cursor: pointer;
  padding: 0;
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  transition: transform 0.2s;
}

.expand-btn.expanded {
  transform: rotate(90deg);
}

.tree-item.selected .expand-btn {
  color: #fff;
}

.expand-placeholder {
  width: 14px;
}

.component-name {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.component-type {
  font-size: 10px;
  color: #888;
  background: #1a1a2e;
  padding: 1px 5px;
  border-radius: 3px;
}

.tree-item.selected .component-type {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}

.children-count {
  font-size: 10px;
  color: #4ecca3;
  background: #1a1a2e;
  padding: 1px 5px;
  border-radius: 3px;
}

.tree-item.selected .children-count {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}

.children {
  padding-left: 18px;
}

.grandchild {
  padding-left: 14px;
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
  font-size: 11px;
  padding: 4px 8px;
  border-bottom: 1px solid #1a1a2e;
}

.prop-label {
  color: #888;
  min-width: 40px;
}

.prop-value {
  color: #e0e0e0;
  display: flex;
  align-items: center;
  gap: 4px;
}

.prop-select {
  background: #1a1a2e;
  border: 1px solid #0f3460;
  color: #e0e0e0;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 11px;
  cursor: pointer;
  outline: none;
}

.prop-select:focus {
  border-color: #e94560;
}

.color-row {
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
}

.color-picker {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  width: 100%;
}

.color-option {
  width: 20px;
  height: 20px;
  border-radius: 3px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.15s;
}

.color-option:hover {
  transform: scale(1.1);
  border-color: #888;
}

.color-option.active {
  border-color: #e94560;
  box-shadow: 0 0 4px #e94560;
}

.empty-hint {
  color: #555;
  font-size: 11px;
  margin-top: 20px;
  text-align: center;
}
</style>
