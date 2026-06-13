import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { WsMessage, Cabinet } from '../utils/types'
import { useCabinetStore } from './cabinetStore'
import { useChatStore } from './chatStore'

export const useWebSocketStore = defineStore('websocket', () => {
  const isConnected = ref(false)
  const reconnectAttempts = ref(0)
  let ws: WebSocket | null = null
  let projectId: string | null = null

  function connect(pid: string) {
    projectId = pid
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:'
    const url = `${protocol}//${window.location.host}/ws/${pid}`

    ws = new WebSocket(url)

    ws.onopen = () => {
      isConnected.value = true
      reconnectAttempts.value = 0
      console.log('WebSocket 已连接')
    }

    ws.onmessage = (event) => {
      const data: WsMessage = JSON.parse(event.data)
      handleMessage(data)
    }

    ws.onclose = () => {
      isConnected.value = false
      console.log('WebSocket 已断开')
      // 自动重连
      if (reconnectAttempts.value < 5) {
        reconnectAttempts.value++
        setTimeout(() => connect(pid), 2000 * reconnectAttempts.value)
      }
    }

    ws.onerror = (error) => {
      console.error('WebSocket 错误:', error)
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
        chatStore.addMessage('system', `错误: ${data.message}`)
        chatStore.finishStream()
        break
    }
  }

  function sendChatMessage(text: string) {
    if (!ws || ws.readyState !== WebSocket.OPEN) return
    const chatStore = useChatStore()
    chatStore.addMessage('user', text)
    chatStore.startStream()
    ws.send(JSON.stringify({ type: 'chat_message', text }))
  }

  function requestSync() {
    if (!ws || ws.readyState !== WebSocket.OPEN) return
    ws.send(JSON.stringify({ type: 'request_sync' }))
  }

  function selectComponent(componentId: string) {
    if (!ws || ws.readyState !== WebSocket.OPEN) return
    ws.send(JSON.stringify({ type: 'select_component', component_id: componentId }))
  }

  function disconnect() {
    if (ws) {
      ws.close()
      ws = null
    }
    isConnected.value = false
  }

  return {
    isConnected,
    reconnectAttempts,
    connect,
    sendChatMessage,
    requestSync,
    selectComponent,
    disconnect,
  }
})