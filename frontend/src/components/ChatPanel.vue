<script setup lang="ts">
import { ref, nextTick, watch } from 'vue'
import { useChatStore } from '../stores/chatStore'
import { useWebSocketStore } from '../stores/websocketStore'

const chatStore = useChatStore()
const wsStore = useWebSocketStore()
const inputText = ref('')
const messagesContainer = ref<HTMLDivElement | null>(null)

async function sendMessage() {
  const text = inputText.value.trim()
  if (!text || !wsStore.isConnected) return

  inputText.value = ''
  wsStore.sendChatMessage(text)
  await scrollToBottom()
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault()
    sendMessage()
  }
}

async function scrollToBottom() {
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

watch(() => chatStore.messages.length, () => {
  scrollToBottom()
})

watch(() => chatStore.currentStreamContent, () => {
  scrollToBottom()
})
</script>

<template>
  <div class="chat-panel">
    <div class="messages" ref="messagesContainer">
      <div v-if="chatStore.messages.length === 0 && !chatStore.isStreaming" class="empty-hint">
        <p>输入自然语言指令来编辑柜子</p>
        <p class="example">例如："在中间加一块隔板"</p>
        <p class="example">例如："把左侧板加高10cm"</p>
        <p class="example">例如："换成橡木材料"</p>
      </div>

      <div
        v-for="msg in chatStore.messages"
        :key="msg.id"
        class="message"
        :class="msg.role"
      >
        <div class="role-label">{{ msg.role === 'user' ? '你' : msg.role === 'assistant' ? 'AI' : '系统' }}</div>
        <div class="content">{{ msg.content }}</div>
      </div>

      <div v-if="chatStore.isStreaming" class="message assistant">
        <div class="role-label">AI</div>
        <div class="content streaming">{{ chatStore.currentStreamContent || '思考中...' }}</div>
      </div>
    </div>

    <div class="chat-input">
      <textarea
        v-model="inputText"
        @keydown="handleKeydown"
        placeholder="输入编辑指令，如：在中间加一块隔板..."
        rows="2"
        :disabled="!wsStore.isConnected"
      ></textarea>
      <button
        @click="sendMessage"
        :disabled="!inputText.trim() || !wsStore.isConnected"
        class="send-btn"
      >
        发送
      </button>
    </div>
  </div>
</template>

<style scoped>
.chat-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.messages {
  flex: 1;
  overflow-y: auto;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.empty-hint {
  text-align: center;
  color: #666;
  margin-top: 40px;
  font-size: 14px;
}

.empty-hint .example {
  margin-top: 8px;
  font-size: 12px;
  color: #555;
  background: #1a1a2e;
  padding: 6px 10px;
  border-radius: 4px;
}

.message {
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 13px;
  line-height: 1.5;
}

.message.user {
  background: #0f3460;
  align-self: flex-end;
}

.message.assistant {
  background: #1a1a2e;
  border: 1px solid #0f3460;
}

.message.system {
  background: #3a1a1a;
  border: 1px solid #e94560;
}

.role-label {
  font-size: 11px;
  font-weight: 600;
  margin-bottom: 4px;
  color: #888;
}

.message.user .role-label {
  color: #4ecca3;
}

.message.assistant .role-label {
  color: #e94560;
}

.content {
  white-space: pre-wrap;
  word-break: break-word;
}

.content.streaming {
  color: #a0a0b0;
}

.chat-input {
  padding: 10px;
  border-top: 1px solid #0f3460;
  display: flex;
  gap: 8px;
}

.chat-input textarea {
  flex: 1;
  padding: 8px 10px;
  border: 1px solid #0f3460;
  border-radius: 6px;
  background: #1a1a2e;
  color: #e0e0e0;
  font-size: 13px;
  font-family: inherit;
  resize: none;
  outline: none;
}

.chat-input textarea:focus {
  border-color: #e94560;
}

.chat-input textarea:disabled {
  opacity: 0.5;
}

.send-btn {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  background: #e94560;
  color: white;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  white-space: nowrap;
}

.send-btn:hover:not(:disabled) {
  background: #c73a52;
}

.send-btn:disabled {
  background: #444;
  cursor: not-allowed;
}
</style>
