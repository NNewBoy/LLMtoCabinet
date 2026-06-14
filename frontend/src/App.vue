<script setup lang="ts">
import HeaderBar from './components/HeaderBar.vue'
import Viewport3D from './components/Viewport3D.vue'
import ChatPanel from './components/ChatPanel.vue'
import ComponentPanel from './components/ComponentPanel.vue'
import HistoryPanel from './components/HistoryPanel.vue'
import SchemePanel from './components/SchemePanel.vue'
import ToastNotification from './components/ToastNotification.vue'
import { useWebSocketStore, setToastCallback } from './stores/websocketStore'
import { useCabinetStore } from './stores/cabinetStore'
import { onMounted, ref, watch } from 'vue'

const wsStore = useWebSocketStore()
const cabinetStore = useCabinetStore()
const activeTab = ref<'chat' | 'component' | 'history' | 'scheme'>('chat')
const toastRef = ref<InstanceType<typeof ToastNotification> | null>(null)

onMounted(() => {
  // 注入 Toast 回调
  setToastCallback((message: string, type: string) => {
    toastRef.value?.addToast(message, type as any)
  })

  const savedId = localStorage.getItem('lastProjectId') || 'default'
  wsStore.connect(savedId)
})

// 监听选中组件变化，自动切换到组件标签
watch(() => cabinetStore.selectedComponentId, (newId) => {
  if (newId) {
    activeTab.value = 'component'
  }
})
</script>

<template>
  <div class="app-container">
    <HeaderBar />
    <div class="main-content">
      <div class="viewport-wrapper">
        <Viewport3D />
      </div>
      <div class="tool-panel">
        <div class="tool-tabs">
          <button
            class="tab-btn"
            :class="{ active: activeTab === 'chat' }"
            @click="activeTab = 'chat'"
          >
            💬 对话
          </button>
          <button
            class="tab-btn"
            :class="{ active: activeTab === 'component' }"
            @click="activeTab = 'component'"
          >
            🧩 组件
          </button>
          <button
            class="tab-btn"
            :class="{ active: activeTab === 'history' }"
            @click="activeTab = 'history'"
          >
            📋 历史
          </button>
          <button
            class="tab-btn"
            :class="{ active: activeTab === 'scheme' }"
            @click="activeTab = 'scheme'"
          >
            📁 方案
          </button>
        </div>
        <div class="tool-content">
          <div v-show="activeTab === 'chat'" class="tab-panel">
            <ChatPanel />
          </div>
          <div v-show="activeTab === 'component'" class="tab-panel">
            <ComponentPanel />
          </div>
          <div v-show="activeTab === 'history'" class="tab-panel">
            <HistoryPanel />
          </div>
          <div v-show="activeTab === 'scheme'" class="tab-panel">
            <SchemePanel />
          </div>
        </div>
      </div>
    </div>
    <ToastNotification ref="toastRef" />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #app {
  height: 100%;
  width: 100%;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #1a1a2e;
  color: #e0e0e0;
}

.app-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.main-content {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.viewport-wrapper {
  flex: 1;
  position: relative;
  overflow: hidden;
}

.tool-panel {
  width: 360px;
  display: flex;
  flex-direction: column;
  background: #16213e;
  border-left: 1px solid #0f3460;
  flex-shrink: 0;
}

.tool-tabs {
  display: flex;
  border-bottom: 1px solid #0f3460;
  background: #1a1a2e;
}

.tab-btn {
  flex: 1;
  padding: 10px 8px;
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  color: #888;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
}

.tab-btn:hover {
  color: #e0e0e0;
  background: #16213e;
}

.tab-btn.active {
  color: #e0e0e0;
  border-bottom-color: #e94560;
  background: #16213e;
}

.tool-content {
  flex: 1;
  overflow: hidden;
  position: relative;
}

.tab-panel {
  position: absolute;
  inset: 0;
  overflow: hidden;
}
</style>
