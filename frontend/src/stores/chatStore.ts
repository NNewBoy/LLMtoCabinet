import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ChatMessage } from '../utils/types'

// 生成 UUID，兼容非 HTTPS 环境
function generateId(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID()
  }
  // Fallback: 生成简单的随机 ID
  return 'xxxx-xxxx-xxxx'.replace(/x/g, () =>
    Math.floor(Math.random() * 16).toString(16)
  )
}

export const useChatStore = defineStore('chat', () => {
  const messages = ref<ChatMessage[]>([])
  const isStreaming = ref(false)
  const currentStreamContent = ref('')

  function addMessage(role: 'user' | 'assistant' | 'system', content: string) {
    messages.value.push({
      id: generateId(),
      role,
      content,
      timestamp: Date.now(),
    })
  }

  function startStream() {
    isStreaming.value = true
    currentStreamContent.value = ''
  }

  function appendStreamContent(text: string) {
    currentStreamContent.value += text
  }

  function finishStream() {
    if (currentStreamContent.value) {
      addMessage('assistant', currentStreamContent.value)
    }
    isStreaming.value = false
    currentStreamContent.value = ''
  }

  function clearMessages() {
    messages.value = []
    currentStreamContent.value = ''
    isStreaming.value = false
  }

  return {
    messages,
    isStreaming,
    currentStreamContent,
    addMessage,
    startStream,
    appendStreamContent,
    finishStream,
    clearMessages,
  }
})
