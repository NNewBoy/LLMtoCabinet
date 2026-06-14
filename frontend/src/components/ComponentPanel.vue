<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCabinetStore } from '../stores/cabinetStore'
import type { CabinetComponent } from '../utils/types'

const cabinetStore = useCabinetStore()
const expandedIds = ref<Set<string>>(new Set())

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
  if (expandedIds.value.has(id)) {
    expandedIds.value.delete(id)
  } else {
    expandedIds.value.add(id)
  }
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
                  :class="{ expanded: expandedIds.has(comp.id) }"
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
              <div v-if="expandedIds.has(comp.id) && hasChildren(comp)" class="children">
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
                      :class="{ expanded: expandedIds.has(child.id) }"
                      @click="toggleExpand(child.id, $event)"
                    >
                      ▶
                    </button>
                    <span v-else class="expand-placeholder"></span>
                    <span class="component-name">{{ child.name }}</span>
                    <span class="component-type">{{ getComponentTypeLabel(child.type) }}</span>
                  </div>
                  <div v-if="expandedIds.has(child.id) && hasChildren(child)" class="children">
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
            <span class="prop-value">{{ selectedComponent.material }}</span>
          </div>
          <div class="prop-row">
            <span class="prop-label">颜色</span>
            <span class="prop-value">
              <span class="color-swatch" :style="{ background: selectedComponent.color }"></span>
              {{ selectedComponent.color }}
            </span>
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
  height: 200px;
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
  font-size: 11px;
  padding: 4px 8px;
  border-bottom: 1px solid #1a1a2e;
}

.prop-label {
  color: #888;
}

.prop-value {
  color: #e0e0e0;
  display: flex;
  align-items: center;
  gap: 4px;
}

.color-swatch {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 2px;
  border: 1px solid #444;
}

.empty-hint {
  color: #555;
  font-size: 11px;
  margin-top: 20px;
  text-align: center;
}
</style>
