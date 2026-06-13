import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ChatMessage } from '../utils/types'

export const useChatStore = defineStore('chat', () => {
  const messages = ref<ChatMessage[]>([])
  const isStreaming = ref(false)
  const currentStreamContent = ref('')

  function addMessage(role: 'user' | 'assistant' | 'system', content: string) {
    messages.value.push({
      id: crypto.randomUUID(),
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