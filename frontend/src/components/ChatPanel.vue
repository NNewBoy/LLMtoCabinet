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
        <div class="empty-icon">💬</div>
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
        <div class="content streaming">
          <span class="typing-indicator"></span>
          {{ chatStore.currentStreamContent || '思考中...' }}
        </div>
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
        <span class="send-icon">↑</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.chat-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: transparent;
}

.messages {
  flex: 1;
  overflow-y: auto;
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.empty-hint {
  text-align: center;
  padding: var(--spacing-2xl) var(--spacing-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
}

.empty-icon {
  font-size: 48px;
  opacity: 0.5;
}

.empty-title {
  color: var(--color-text-secondary);
  font-size: 14px;
}

.examples {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  width: 100%;
  max-width: 280px;
}

.example {
  font-size: 12px;
  color: var(--color-text-muted);
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  cursor: default;
}

.example:hover {
  background: var(--glass-bg-hover);
  border-color: var(--glass-border-hover);
  color: var(--color-text-secondary);
}

.message {
  padding: var(--spacing-md);
  border-radius: var(--radius-lg);
  font-size: 13px;
  line-height: 1.6;
  max-width: 85%;
  position: relative;
}

.message.user {
  background: linear-gradient(135deg, rgba(129, 140, 248, 0.3) 0%, rgba(129, 140, 248, 0.15) 100%);
  border: 1px solid rgba(129, 140, 248, 0.3);
  align-self: flex-end;
  backdrop-filter: blur(8px);
}

.message.assistant {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  align-self: flex-start;
  backdrop-filter: blur(8px);
}

.message.system {
  background: rgba(248, 113, 113, 0.15);
  border: 1px solid rgba(248, 113, 113, 0.3);
  color: var(--color-error);
  align-self: center;
  font-size: 12px;
  max-width: 90%;
}

.role-label {
  font-size: 11px;
  font-weight: 600;
  margin-bottom: var(--spacing-xs);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.message.user .role-label {
  color: var(--color-primary);
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
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
}

.typing-indicator {
  display: inline-block;
  width: 8px;
  height: 8px;
  background: var(--color-primary);
  border-radius: 50%;
  animation: typing 1.4s ease-in-out infinite;
  flex-shrink: 0;
  margin-top: 6px;
}

@keyframes typing {
  0%, 100% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
}

.chat-input {
  padding: var(--spacing-md);
  border-top: 1px solid var(--glass-border);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  background: rgba(15, 23, 42, 0.4);
  backdrop-filter: blur(8px);
}

.chat-input textarea {
  flex: 1;
  padding: var(--spacing-md);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  background: var(--glass-bg);
  color: var(--color-text-primary);
  font-size: 13px;
  font-family: inherit;
  resize: none;
  outline: none;
  transition: all var(--transition-fast);
  backdrop-filter: blur(8px);
}

.chat-input textarea:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary-glow);
}

.chat-input textarea:disabled {
  opacity: 0.5;
}

.chat-input textarea::placeholder {
  color: var(--color-text-muted);
}

.send-btn {
  width: 44px;
  height: 44px;
  border: none;
  border-radius: var(--radius-md);
  background: linear-gradient(135deg, var(--color-primary) 0%, #a78bfa 100%);
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.send-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px var(--color-primary-glow);
}

.send-btn:active:not(:disabled) {
  transform: translateY(0);
}

.send-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.send-icon {
  font-weight: bold;
}

/* 移动端适配 */
@media (max-width: 767px) {
  .messages {
    padding: var(--spacing-sm);
    gap: var(--spacing-xs);
  }

  .message {
    max-width: 90%;
    font-size: 13px;
    padding: var(--spacing-sm);
  }

  .chat-input {
    padding: var(--spacing-xs);
    gap: var(--spacing-xs);
  }

  .chat-input textarea {
    font-size: 16px; /* 防止 iOS 自动缩放 */
    padding: var(--spacing-sm);
  }

  .send-btn {
    width: 36px;
    height: 36px;
    font-size: 16px;
  }

  .empty-hint {
    padding: var(--spacing-lg);
  }

  .empty-icon {
    font-size: 32px;
  }

  .empty-title {
    font-size: 13px;
  }

  .example {
    font-size: 11px;
    padding: var(--spacing-xs) var(--spacing-sm);
  }
}
</style>
