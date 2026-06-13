<script setup lang="ts">
import { useCabinetStore } from '../stores/cabinetStore'

const cabinetStore = useCabinetStore()

function selectComponent(id: string) {
  cabinetStore.selectComponent(id === cabinetStore.selectedComponentId ? null : id)
}
</script>

<template>
  <footer class="footer-bar">
    <div class="footer-left">
      <span class="section-title">组件列表</span>
      <div class="component-list">
        <div
          v-for="comp in cabinetStore.componentList"
          :key="comp.id"
          class="component-item"
          :class="{ selected: cabinetStore.selectedComponentId === comp.id }"
          @click="selectComponent(comp.id)"
        >
          {{ comp.name }}
        </div>
        <div v-if="cabinetStore.componentList.length === 0" class="empty">
          暂无组件
        </div>
      </div>
    </div>
    <div class="footer-right">
      <span class="section-title">属性</span>
      <div v-if="cabinetStore.selectedComponent" class="properties">
        <div class="prop-row">
          <span class="prop-label">名称</span>
          <span class="prop-value">{{ cabinetStore.selectedComponent.name }}</span>
        </div>
        <div class="prop-row">
          <span class="prop-label">类型</span>
          <span class="prop-value">{{ cabinetStore.selectedComponent.type }}</span>
        </div>
        <div class="prop-row">
          <span class="prop-label">尺寸</span>
          <span class="prop-value">
            {{ cabinetStore.selectedComponent.length }} x
            {{ cabinetStore.selectedComponent.height }} x
            {{ cabinetStore.selectedComponent.width }} mm
          </span>
        </div>
        <div class="prop-row">
          <span class="prop-label">位置</span>
          <span class="prop-value">
            X:{{ cabinetStore.selectedComponent.position.x }}
            Y:{{ cabinetStore.selectedComponent.position.y }}
            Z:{{ cabinetStore.selectedComponent.position.z }}
          </span>
        </div>
        <div class="prop-row">
          <span class="prop-label">材料</span>
          <span class="prop-value">{{ cabinetStore.selectedComponent.material }}</span>
        </div>
        <div class="prop-row">
          <span class="prop-label">颜色</span>
          <span class="prop-value">
            <span class="color-swatch" :style="{ background: cabinetStore.selectedComponent.color }"></span>
            {{ cabinetStore.selectedComponent.color }}
          </span>
        </div>
      </div>
      <div v-else class="empty-hint">
        点击组件查看属性
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-bar {
  display: flex;
  height: 160px;
  background: #16213e;
  border-top: 1px solid #0f3460;
  flex-shrink: 0;
}

.footer-left {
  width: 200px;
  padding: 8px 12px;
  border-right: 1px solid #0f3460;
  display: flex;
  flex-direction: column;
}

.footer-right {
  flex: 1;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.section-title {
  font-size: 12px;
  font-weight: 600;
  color: #888;
  margin-bottom: 6px;
  text-transform: uppercase;
}

.component-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow-y: auto;
  flex: 1;
}

.component-item {
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.15s;
}

.component-item:hover {
  background: #0f3460;
}

.component-item.selected {
  background: #e94560;
  color: white;
}

.empty {
  color: #555;
  font-size: 12px;
}

.properties {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.prop-row {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  padding: 3px 0;
  border-bottom: 1px solid #1a1a2e;
}

.prop-label {
  color: #888;
}

.prop-value {
  color: #e0e0e0;
  display: flex;
  align-items: center;
  gap: 6px;
}

.color-swatch {
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 3px;
  border: 1px solid #444;
}

.empty-hint {
  color: #555;
  font-size: 12px;
  margin-top: 20px;
  text-align: center;
}
</style>