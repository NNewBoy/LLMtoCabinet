<script setup lang="ts">
import HeaderBar from './components/HeaderBar.vue'
import Viewport3D from './components/Viewport3D.vue'
import ChatPanel from './components/ChatPanel.vue'
import FooterBar from './components/FooterBar.vue'
import { useWebSocketStore } from './stores/websocketStore'
import { onMounted } from 'vue'

const wsStore = useWebSocketStore()

onMounted(() => {
  wsStore.connect('default')
})
</script>

<template>
  <div class="app-container">
    <HeaderBar />
    <div class="main-content">
      <Viewport3D />
      <ChatPanel />
    </div>
    <FooterBar />
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
</style>