<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import HeaderBar from './components/HeaderBar.vue'
import Viewport3D from './components/Viewport3D.vue'
import ChatPanel from './components/ChatPanel.vue'
import { useWebSocketStore } from './stores/websocketStore'
import { useCabinetStore } from './stores/cabinetStore'
import { useThemeStore } from './stores/theme'
import { onMounted, ref, watch } from 'vue'
import { ChatRound, Box, List, Folder } from '@element-plus/icons-vue'

// 非首屏组件懒加载
const ComponentPanel = defineAsyncComponent(() => import('./components/ComponentPanel.vue'))
const HistoryPanel = defineAsyncComponent(() => import('./components/HistoryPanel.vue'))
const SchemePanel = defineAsyncComponent(() => import('./components/SchemePanel.vue'))

const wsStore = useWebSocketStore()
const cabinetStore = useCabinetStore()
const themeStore = useThemeStore()
const activeTab = ref<'chat' | 'component' | 'history' | 'scheme'>('chat')
const isMobile = ref(false)

// 检测是否为移动端
function checkMobile() {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  // 初始化主题：优先 URI 参数 ?theme=light|dark，其次 localStorage，默认 dark
  themeStore.init()

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
  { key: 'chat', icon: ChatRound, label: '对话' },
  { key: 'component', icon: Box, label: '组件' },
  { key: 'history', icon: List, label: '历史' },
  { key: 'scheme', icon: Folder, label: '方案' },
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
        <div class="tool-panel glass">
          <div class="tool-tabs">
            <el-button
              v-for="tab in tabs"
              :key="tab.key"
              class="tab-btn"
              :class="{ active: activeTab === tab.key }"
              @click="activeTab = tab.key"
            >
              <el-icon class="tab-icon"><component :is="tab.icon" /></el-icon>
              <span class="tab-label">{{ tab.label }}</span>
            </el-button>
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
      <HeaderBar class="mobile-header" />
      <div class="mobile-viewport">
        <Viewport3D />
      </div>
      <div class="mobile-tabs">
        <el-button
          v-for="tab in tabs"
          :key="tab.key"
          class="mobile-tab-btn"
          :class="{ active: activeTab === tab.key }"
          @click="activeTab = tab.key"
        >
          <el-icon class="tab-icon"><component :is="tab.icon" /></el-icon>
          <span class="tab-label">{{ tab.label }}</span>
        </el-button>
      </div>
      <div class="mobile-tool-panel glass">
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
  background: var(--bg-viewport);
}

.tool-panel {
  width: 360px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 0;
}

.tool-tabs {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
  border-bottom: 1px solid var(--glass-border);
  background: var(--glass-bg-item);
}

.tab-btn {
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 12px;
  margin: 0;
  background: none;
  border: none;
  border-radius: 10px;
  color: var(--color-text-muted);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: color 150ms cubic-bezier(0.16, 1, 0.3, 1), background 150ms cubic-bezier(0.16, 1, 0.3, 1);
  height: auto;
  --el-button-bg-color: transparent;
  --el-button-border-color: transparent;
  --el-button-hover-bg-color: transparent;
  --el-button-hover-border-color: transparent;
  --el-button-hover-text-color: var(--color-primary);
  --el-button-active-bg-color: transparent;
  --el-button-active-border-color: transparent;
  --el-button-active-text-color: var(--color-primary);
  --el-button-text-color: var(--color-text-muted);
  box-shadow: none;
}

.tab-btn:hover {
  color: var(--color-primary);
  background: rgba(129, 140, 248, 0.08);
}

.tab-btn.active {
  color: var(--color-primary);
}

.tab-btn.active::after {
  content: '';
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 2px;
  height: 2px;
  border-radius: 2px;
  background: var(--color-primary);
}

.tab-icon {
  font-size: 18px;
}

.tab-btn.active .tab-icon {
  color: var(--color-primary);
}

.tab-label {
  font-size: 14px;
  font-weight: 500;
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
  background: var(--bg-viewport);
}

.mobile-header {
  flex-shrink: 0;
}

.mobile-tabs {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  border-top: 1px solid var(--glass-border);
  border-bottom: 1px solid var(--glass-border);
}

.mobile-tab-btn {
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 10px;
  background: none;
  border: none;
  border-radius: 10px;
  color: var(--color-text-muted);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: color 150ms cubic-bezier(0.16, 1, 0.3, 1), background 150ms cubic-bezier(0.16, 1, 0.3, 1);
  min-height: 40px;
  height: auto;
  --el-button-bg-color: transparent;
  --el-button-border-color: transparent;
  --el-button-hover-bg-color: transparent;
  --el-button-hover-border-color: transparent;
  --el-button-hover-text-color: var(--color-primary);
  --el-button-active-bg-color: transparent;
  --el-button-active-border-color: transparent;
  --el-button-active-text-color: var(--color-primary);
  --el-button-text-color: var(--color-text-muted);
  box-shadow: none;
}

.mobile-tab-btn:hover,
.mobile-tab-btn:active {
  color: var(--color-primary);
  background: rgba(129, 140, 248, 0.08);
}

.mobile-tab-btn.active {
  color: var(--color-primary);
}

.mobile-tab-btn.active::after {
  content: '';
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 2px;
  height: 2px;
  border-radius: 2px;
  background: var(--color-primary);
}

.mobile-tool-panel {
  flex: 1;
  overflow: hidden;
  position: relative;
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  border-radius: 0;
}

/* 响应式断点 */
@media (max-width: 767px) {
  .tool-panel {
    width: 100%;
  }

  .tab-btn {
    font-size: 14px;
  }

  .tab-label {
    font-size: 14px;
  }

  .tab-icon {
    font-size: 20px;
  }

  .mobile-tab-btn {
    font-size: 14px;
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
