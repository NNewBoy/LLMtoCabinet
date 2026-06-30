<script setup lang="ts">
import HeaderBar from './components/HeaderBar.vue'
import Viewport3D from './components/Viewport3D.vue'
import ChatPanel from './components/ChatPanel.vue'
import ComponentPanel from './components/ComponentPanel.vue'
import HistoryPanel from './components/HistoryPanel.vue'
import SchemePanel from './components/SchemePanel.vue'
import ToastNotification from './components/ToastNotification.vue'
import { useWebSocketStore, setToastCallback } from './stores/websocketStore'
import { useCabinetStore, setToastCallback as setCabinetToastCallback } from './stores/cabinetStore'
import { useThemeStore } from './stores/theme'
import { onMounted, ref, watch } from 'vue'

const wsStore = useWebSocketStore()
const cabinetStore = useCabinetStore()
const themeStore = useThemeStore()
const activeTab = ref<'chat' | 'component' | 'history' | 'scheme'>('chat')
const toastRef = ref<InstanceType<typeof ToastNotification> | null>(null)
const isMobile = ref(false)

// 检测是否为移动端
function checkMobile() {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  // 初始化主题：优先 URI 参数 ?theme=light|dark，其次 localStorage，默认 dark
  themeStore.init()

  // 注入 Toast 回调
  const toastFn = (message: string, type: string) => {
    toastRef.value?.addToast(message, type as any)
  }
  setToastCallback(toastFn)
  setCabinetToastCallback(toastFn)

  const savedId = localStorage.getItem('lastProjectId') || 'default'
  wsStore.connect(savedId)

  // 初始化检测
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

// 监听选中组件变化，自动切换到组件标签
watch(() => cabinetStore.componentClickSignal, () => {
  if (cabinetStore.selectedComponentId) {
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

<style scoped>
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
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border-left: 1px solid var(--glass-border);
  flex-shrink: 0;
}

.tool-tabs {
  display: flex;
  border-bottom: 1px solid var(--glass-border);
  background: var(--glass-bg);
  backdrop-filter: blur(8px);
}

.tab-btn {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 12px 8px;
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  color: var(--color-text-muted);
  font-size: 11px;
  cursor: pointer;
  transition: all var(--transition-fast);
  min-height: 48px;
  position: relative;
}

.tab-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(129, 140, 248, 0) 0%, rgba(129, 140, 248, 0.1) 100%);
  opacity: 0;
  transition: opacity var(--transition-fast);
}

.tab-btn:hover {
  color: var(--color-text-secondary);
}

.tab-btn:hover::before {
  opacity: 1;
}

.tab-btn.active {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
}

.tab-btn.active::before {
  opacity: 1;
}

.tab-icon {
  font-size: 18px;
  filter: grayscale(0.3);
}

.tab-btn.active .tab-icon {
  filter: grayscale(0);
}

.tab-label {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
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
  height: 35vh;
  min-height: 180px;
  position: relative;
  overflow: hidden;
}

.mobile-header {
  order: -1;
}

.mobile-tabs {
  display: flex;
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  border-top: 1px solid var(--glass-border);
  border-bottom: 1px solid var(--glass-border);
}

.mobile-tab-btn {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  padding: 6px 2px;
  background: none;
  border: none;
  color: var(--color-text-muted);
  font-size: 9px;
  cursor: pointer;
  transition: all var(--transition-fast);
  min-height: 44px;
}

.mobile-tab-btn:hover,
.mobile-tab-btn:active {
  color: var(--color-text-secondary);
  background: rgba(129, 140, 248, 0.1);
}

.mobile-tab-btn.active {
  color: var(--color-primary);
  background: rgba(129, 140, 248, 0.15);
}

.mobile-tool-panel {
  flex: 1;
  overflow: hidden;
  position: relative;
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
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
