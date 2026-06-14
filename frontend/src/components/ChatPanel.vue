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
        <p class="empty-title">输入自然语言指令来编辑柜子</p>
        <div class="examples">
          <p class="example">"在中间加一块隔板"</p>
          <p class="example">"把左侧板加高10cm"</p>
          <p class="example">"换成橡木材料"</p>
        </div>
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
        placeholder="输入编辑指令..."
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
  background: var(--color-bg-secondary);
}

.messages {
  flex: 1;
  overflow-y: auto;
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.empty-hint {
  text-align: center;
  padding: var(--spacing-xl) var(--spacing-lg);
}

.empty-title {
  color: var(--color-text-secondary);
  font-size: 14px;
  margin-bottom: var(--spacing-md);
}

.examples {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.example {
  font-size: 12px;
  color: var(--color-text-muted);
  background: var(--color-bg-tertiary);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
}

.message {
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  font-size: 13px;
  line-height: 1.5;
  max-width: 85%;
}

.message.user {
  background: var(--color-primary);
  color: white;
  align-self: flex-end;
}

.message.assistant {
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
  align-self: flex-start;
}

.message.system {
  background: rgba(233, 69, 96, 0.15);
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  align-self: center;
  font-size: 12px;
}

.role-label {
  font-size: 11px;
  font-weight: 600;
  margin-bottom: 2px;
  color: var(--color-text-muted);
}

.message.user .role-label {
  color: rgba(255, 255, 255, 0.8);
}

.message.assistant .role-label {
  color: var(--color-success);
}

.content {
  white-space: pre-wrap;
  word-break: break-word;
}

.content.streaming {
  color: var(--color-text-secondary);
}

.chat-input {
  padding: var(--spacing-sm);
  border-top: 1px solid var(--color-border);
  display: flex;
  gap: var(--spacing-sm);
  background: var(--color-bg-tertiary);
}

.chat-input textarea {
  flex: 1;
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-bg-primary);
  color: var(--color-text-primary);
  font-size: 13px;
  font-family: inherit;
  resize: none;
  outline: none;
  transition: border-color var(--transition-fast);
}

.chat-input textarea:focus {
  border-color: var(--color-primary);
}

.chat-input textarea:disabled {
  opacity: 0.5;
}

.send-btn {
  padding: var(--spacing-sm) var(--spacing-lg);
  border: none;
  border-radius: var(--radius-md);
  background: var(--color-primary);
  color: white;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background var(--transition-fast);
  white-space: nowrap;
  min-height: 44px;
}

.send-btn:hover:not(:disabled) {
  background: var(--color-primary-hover);
}

.send-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* 移动端适配 */
@media (max-width: 767px) {
  .message {
    max-width: 90%;
    font-size: 14px;
  }

  .chat-input textarea {
    font-size: 16px; /* 防止 iOS 自动缩放 */
  }
}
</style>
