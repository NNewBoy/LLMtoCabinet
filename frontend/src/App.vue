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
import { onMounted, ref, watch, computed } from 'vue'

const wsStore = useWebSocketStore()
const cabinetStore = useCabinetStore()
const activeTab = ref<'chat' | 'component' | 'history' | 'scheme'>('chat')
const toastRef = ref<InstanceType<typeof ToastNotification> | null>(null)
const isMobile = ref(false)

// 检测是否为移动端
function checkMobile() {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  // 注入 Toast 回调
  setToastCallback((message: string, type: string) => {
    toastRef.value?.addToast(message, type as any)
  })

  const savedId = localStorage.getItem('lastProjectId') || 'default'
  wsStore.connect(savedId)

  // 初始化检测
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

// 监听选中组件变化，自动切换到组件标签
watch(() => cabinetStore.selectedComponentId, (newId) => {
  if (newId) {
    activeTab.value = 'component'
  }
})

// Tab 配置
const tabs = [
  { key: 'chat', icon: '💬', label: '对话' },
  { key: 'component', icon: '🧩', label: '组件' },
  { key: 'history', icon: '📋', label: '历史' },
  { key: 'scheme', icon: '📁', label: '方案' },
] as const
</script>

<template>
  <div class="app-container" :class="{ 'is-mobile': isMobile }">
    <!-- PC 端布局 -->
    <template v-if="!isMobile">
      <HeaderBar />
      <div class="main-content">
        <div class="viewport-wrapper">
          <Viewport3D />
        </div>
        <div class="tool-panel">
          <div class="tool-tabs">
            <button
              v-for="tab in tabs"
              :key="tab.key"
              class="tab-btn"
              :class="{ active: activeTab === tab.key }"
              @click="activeTab = tab.key"
            >
              <span class="tab-icon">{{ tab.icon }}</span>
              <span class="tab-label">{{ tab.label }}</span>
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
    </template>

    <!-- 移动端布局 -->
    <template v-else>
      <div class="mobile-viewport">
        <Viewport3D />
      </div>
      <HeaderBar class="mobile-header" />
      <div class="mobile-tabs">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          class="mobile-tab-btn"
          :class="{ active: activeTab === tab.key }"
          @click="activeTab = tab.key"
        >
          <span class="tab-icon">{{ tab.icon }}</span>
          <span class="tab-label">{{ tab.label }}</span>
        </button>
      </div>
      <div class="mobile-tool-panel">
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
    </template>

    <ToastNotification ref="toastRef" />
  </div>
</template>

<style>
/* 基础重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #app {
  height: 100%;
  width: 100%;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background: #0f172a;
  color: #e2e8f0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 颜色变量 */
:root {
  --color-primary: #e94560;
  --color-primary-hover: #d63851;
  --color-success: #4ecca3;
  --color-warning: #ffa500;
  --color-bg-primary: #0f172a;
  --color-bg-secondary: #1e293b;
  --color-bg-tertiary: #334155;
  --color-border: #334155;
  --color-text-primary: #e2e8f0;
  --color-text-secondary: #94a3b8;
  --color-text-muted: #64748b;
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 12px;
  --spacing-lg: 16px;
  --spacing-xl: 24px;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --transition-fast: 150ms ease;
  --transition-normal: 200ms ease;
}

/* 应用容器 */
.app-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  height: 100dvh;
}

/* PC 端布局 */
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
  background: var(--color-bg-secondary);
  border-left: 1px solid var(--color-border);
  flex-shrink: 0;
}

.tool-tabs {
  display: flex;
  border-bottom: 1px solid var(--color-border);
  background: var(--color-bg-tertiary);
}

.tab-btn {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 10px 8px;
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  color: var(--color-text-muted);
  font-size: 11px;
  cursor: pointer;
  transition: all var(--transition-fast);
  min-height: 44px;
}

.tab-btn:hover {
  color: var(--color-text-primary);
  background: rgba(255, 255, 255, 0.05);
}

.tab-btn.active {
  color: var(--color-text-primary);
  border-bottom-color: var(--color-primary);
  background: var(--color-bg-secondary);
}

.tab-icon {
  font-size: 16px;
}

.tab-label {
  font-size: 11px;
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

/* 移动端布局 */
.is-mobile {
  flex-direction: column;
}

.mobile-viewport {
  height: 40vh;
  min-height: 200px;
  position: relative;
  overflow: hidden;
}

.mobile-header {
  order: -1;
}

.mobile-tabs {
  display: flex;
  background: var(--color-bg-tertiary);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.mobile-tab-btn {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 8px 4px;
  background: none;
  border: none;
  color: var(--color-text-muted);
  font-size: 10px;
  cursor: pointer;
  transition: all var(--transition-fast);
  min-height: 48px;
}

.mobile-tab-btn:hover,
.mobile-tab-btn:active {
  color: var(--color-text-primary);
  background: rgba(255, 255, 255, 0.05);
}

.mobile-tab-btn.active {
  color: var(--color-primary);
  background: var(--color-bg-secondary);
}

.mobile-tool-panel {
  flex: 1;
  overflow: hidden;
  position: relative;
  background: var(--color-bg-secondary);
}

/* 响应式断点 */
@media (max-width: 767px) {
  .tool-panel {
    width: 100%;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .tool-panel {
    width: 300px;
  }
}

@media (min-width: 1440px) {
  .tool-panel {
    width: 400px;
  }
}
</style>
