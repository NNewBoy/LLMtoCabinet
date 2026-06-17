import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { WsMessage, Cabinet } from '../utils/types'
import { useCabinetStore } from './cabinetStore'
import { useChatStore } from './chatStore'
import { apiUrl, wsUrl } from '../config'

// Toast 通知回调（由 App.vue 注入）
let toastCallback: ((message: string, type: string) => void) | null = null

export function setToastCallback(callback: (message: string, type: string) => void) {
  toastCallback = callback
}

export function showToast(message: string, type: 'success' | 'error' | 'warning' | 'info' = 'info') {
  if (toastCallback) {
    toastCallback(message, type)
  }
}

export const useWebSocketStore = defineStore('websocket', () => {
  const isConnected = ref(false)
  const reconnectAttempts = ref(0)
  const currentProjectId = ref(localStorage.getItem('lastProjectId') || 'default')
  const schemeListVersion = ref(0) // 用于触发方案列表刷新
  let ws: WebSocket | null = null
  let connectionGeneration = 0

  function connect(pid: string) {
    currentProjectId.value = pid
    localStorage.setItem('lastProjectId', pid)
    connectionGeneration++
    const myGeneration = connectionGeneration

    // 关闭旧连接
    if (ws) {
      ws.onclose = null
      ws.close()
      ws = null
    }

    const url = wsUrl(pid)

    ws = new WebSocket(url)

    ws.onopen = () => {
      if (myGeneration !== connectionGeneration) return
      isConnected.value = true
      reconnectAttempts.value = 0
      console.log(`WebSocket 已连接: ${pid}`)
      showToast('已连接到服务器', 'success')
    }

    ws.onmessage = (event) => {
      if (myGeneration !== connectionGeneration) return
      const data: WsMessage = JSON.parse(event.data)
      handleMessage(data)
    }

    ws.onclose = () => {
      if (myGeneration !== connectionGeneration) return
      isConnected.value = false
      console.log(`WebSocket 已断开: ${pid}`)
      showToast('连接已断开，正在尝试重连...', 'warning')
      // 自动重连
      if (reconnectAttempts.value < 5) {
        reconnectAttempts.value++
        setTimeout(() => {
          if (myGeneration !== connectionGeneration) return
          connect(pid)
        }, 2000 * reconnectAttempts.value)
      } else {
        showToast('重连失败，请刷新页面', 'error')
      }
    }

    ws.onerror = (error) => {
      console.error('WebSocket 错误:', error)
      showToast('连接出现错误', 'error')
    }
  }

  function handleMessage(data: WsMessage) {
    const cabinetStore = useCabinetStore()
    const chatStore = useChatStore()

    switch (data.type) {
      case 'cabinet_update':
        if (data.cabinet) {
          cabinetStore.setCabinet(data.cabinet)
        }
        break
      case 'agent_thinking':
        if (data.content) {
          chatStore.appendStreamContent(data.content)
        }
        break
      case 'agent_status':
        if (data.content) {
          chatStore.addThinkingStep(data.content)
        }
        break
      case 'agent_stopped':
        chatStore.stopStream()
        break
      case 'agent_response':
        if (data.content) {
          chatStore.finishStream()
          chatStore.addMessage('assistant', data.content)
        }
        break
      case 'stream_end':
        chatStore.finishStream()
        break
      case 'error':
        const errorMsg = data.message || '未知错误'
        chatStore.addMessage('system', `错误: ${errorMsg}`)
        chatStore.finishStream()
        showToast(errorMsg, 'error')
        break
    }
  }

  function sendChatMessage(text: string) {
    if (!ws || ws.readyState !== WebSocket.OPEN) {
      showToast('未连接到服务器，请稍后重试', 'warning')
      return
    }
    const chatStore = useChatStore()
    chatStore.disableUncontinuedStoppedMessage()
    chatStore.addMessage('user', text)
    chatStore.startStream()
    ws.send(JSON.stringify({ type: 'chat_message', text }))
  }

  function continueConversation(prevThinkingSteps: string[], messageId: string) {
    if (!ws || ws.readyState !== WebSocket.OPEN) {
      showToast('未连接到服务器，请稍后重试', 'warning')
      return
    }
    const chatStore = useChatStore()
    chatStore.continueStream(prevThinkingSteps)
    chatStore.markContinued(messageId)
    ws.send(JSON.stringify({ type: 'continue_message' }))
  }

  async function stopCurrentConversation(markStopped = true) {
    const chatStore = useChatStore()
    if (!chatStore.isStreaming) return

    const projectId = currentProjectId.value
    try {
      await fetch(apiUrl(`/api/projects/${projectId}/stop`), { method: 'POST' })
    } catch (error) {
      console.error('停止旧对话失败:', error)
    }

    if (markStopped && chatStore.isStreaming) {
      chatStore.stopStream()
    }
  }

  function requestSync() {
    if (!ws || ws.readyState !== WebSocket.OPEN) return
    ws.send(JSON.stringify({ type: 'request_sync' }))
  }

  function selectComponent(componentId: string) {
    if (!ws || ws.readyState !== WebSocket.OPEN) return
    ws.send(JSON.stringify({ type: 'select_component', component_id: componentId }))
  }

  function refreshSchemeList() {
    schemeListVersion.value++
  }

  function disconnect() {
    connectionGeneration++
    if (ws) {
      ws.onclose = null
      ws.close()
      ws = null
    }
    isConnected.value = false
    reconnectAttempts.value = 0
  }

  return {
    isConnected,
    reconnectAttempts,
    currentProjectId,
    schemeListVersion,
    connect,
    sendChatMessage,
    continueConversation,
    stopCurrentConversation,
    requestSync,
    selectComponent,
    refreshSchemeList,
    disconnect,
  }
})
