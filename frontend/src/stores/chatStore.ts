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
  const thinkingSteps = ref<string[]>([]) // Agent 思考步骤（工具调用状态）

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
    thinkingSteps.value = []
  }

  function appendStreamContent(text: string) {
    currentStreamContent.value += text
  }

  function addThinkingStep(text: string) {
    thinkingSteps.value.push(text)
  }

  function finishStream() {
    if (currentStreamContent.value) {
      addMessage('assistant', currentStreamContent.value)
    }
    isStreaming.value = false
    currentStreamContent.value = ''
    thinkingSteps.value = []
  }

  function stopStream() {
    messages.value.push({
      id: generateId(),
      role: 'assistant',
      content: currentStreamContent.value || '对话已停止',
      timestamp: Date.now(),
      stopped: true,
      thinkingSteps: [...thinkingSteps.value],
    })
    isStreaming.value = false
    currentStreamContent.value = ''
    thinkingSteps.value = []
  }

  function continueStream(prevThinkingSteps: string[]) {
    isStreaming.value = true
    currentStreamContent.value = ''
    thinkingSteps.value = [...prevThinkingSteps]
  }

  function markContinued(messageId: string) {
    const msg = messages.value.find(m => m.id === messageId)
    if (msg) {
      msg.continued = true
    }
  }

  function disableUncontinuedStoppedMessage() {
    for (let i = messages.value.length - 1; i >= 0; i--) {
      const msg = messages.value[i]
      if (msg.role === 'assistant' && msg.stopped && !msg.continued) {
        msg.continued = true
        break
      }
    }
  }

  function clearMessages() {
    messages.value = []
    currentStreamContent.value = ''
    isStreaming.value = false
    thinkingSteps.value = []
  }

  return {
    messages,
    isStreaming,
    currentStreamContent,
    thinkingSteps,
    addMessage,
    startStream,
    appendStreamContent,
    addThinkingStep,
    finishStream,
    stopStream,
    continueStream,
    markContinued,
    disableUncontinuedStoppedMessage,
    clearMessages,
  }
})
