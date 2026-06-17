<script setup lang="ts">
import { ref, nextTick, watch } from 'vue'
import { useChatStore } from '../stores/chatStore'
import { useWebSocketStore } from '../stores/websocketStore'
import { apiUrl } from '../config'

const chatStore = useChatStore()
const wsStore = useWebSocketStore()
const inputText = ref('')
const messagesContainer = ref<HTMLDivElement | null>(null)

const examplePrompts = [
  '中间加两块层板形成高度3:2:1的三层空间，上层加一个双开门，下层加一个抽屉',
  '在中间加一块层板',
  '底板延伸出10cm',
  '背板换成棕色',
]

async function sendMessage() {
  const text = inputText.value.trim()
  if (!text || !wsStore.isConnected || chatStore.isStreaming) return

  inputText.value = ''
  wsStore.sendChatMessage(text)
  await scrollToBottom()
}

async function stopConversation() {
  const projectId = wsStore.currentProjectId
  try {
    await fetch(apiUrl(`/api/projects/${projectId}/stop`), { method: 'POST' })
  } catch (error) {
    console.error('停止对话请求失败:', error)
  }
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

function selectExample(text: string) {
  inputText.value = text
}

watch(() => chatStore.messages.length, () => {
  scrollToBottom()
})

watch(() => chatStore.currentStreamContent, () => {
  scrollToBottom()
})

watch(() => chatStore.thinkingSteps.length, () => {
  scrollToBottom()
})
</script>

<template>
  <div class="chat-panel">
    <div class="messages" ref="messagesContainer" role="log" aria-live="polite">
      <!-- 空状态 -->
      <div v-if="chatStore.messages.length === 0 && !chatStore.isStreaming" class="empty-state">
        <div class="empty-icon-wrapper">
          <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </div>
        <p class="empty-title">输入自然语言指令来编辑柜子</p>
        <div class="examples">
          <button
            v-for="prompt in examplePrompts"
            :key="prompt"
            class="example"
            @click="selectExample(prompt)"
          >
            <svg class="example-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
            <span>{{ prompt }}</span>
          </button>
        </div>
      </div>

      <!-- 消息列表 -->
      <div
        v-for="msg in chatStore.messages"
        :key="msg.id"
        class="message"
        :class="msg.role"
      >
        <div class="message-header">
          <div class="role-avatar" :class="msg.role">
            <svg v-if="msg.role === 'user'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <svg v-else-if="msg.role === 'assistant'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="11" width="18" height="10" rx="2"/>
              <circle cx="12" cy="5" r="2"/>
              <path d="M12 7v4"/>
              <line x1="8" y1="16" x2="8" y2="16"/>
              <line x1="16" y1="16" x2="16" y2="16"/>
            </svg>
            <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <span class="role-label">{{ msg.role === 'user' ? '你' : msg.role === 'assistant' ? 'AI' : '系统' }}</span>
        </div>
        <div class="content">{{ msg.content }}</div>
        <div v-if="msg.stopped" class="stopped-actions">
          <span class="stopped-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="6" y="6" width="12" height="12" rx="2"/>
            </svg>
            已停止
          </span>
          <button
            v-if="!chatStore.isStreaming && !msg.continued"
            @click="wsStore.continueConversation(msg.thinkingSteps || [], msg.id)"
            class="continue-btn"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
            继续执行
          </button>
        </div>
      </div>

      <!-- 流式响应 -->
      <div v-if="chatStore.isStreaming" class="message assistant streaming-msg">
        <div class="message-header">
          <div class="role-avatar assistant">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="11" width="18" height="10" rx="2"/>
              <circle cx="12" cy="5" r="2"/>
              <path d="M12 7v4"/>
              <line x1="8" y1="16" x2="8" y2="16"/>
              <line x1="16" y1="16" x2="16" y2="16"/>
            </svg>
          </div>
          <span class="role-label">AI</span>
        </div>
        <div class="content streaming">
          <!-- 思考步骤展示 -->
          <div v-if="chatStore.thinkingSteps.length > 0" class="thinking-steps">
            <div
              v-for="(step, idx) in chatStore.thinkingSteps"
              :key="idx"
              class="thinking-step"
              :class="{ 'step-active': idx === chatStore.thinkingSteps.length - 1 && !chatStore.currentStreamContent }"
            >
              <span v-if="idx === chatStore.thinkingSteps.length - 1 && !chatStore.currentStreamContent" class="step-spinner"></span>
              <svg v-else class="step-done" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span class="step-text">{{ step }}</span>
            </div>
          </div>
          <!-- 流式文本 -->
          <div v-if="chatStore.currentStreamContent" class="stream-text">
            <span class="typing-indicator"></span>
            {{ chatStore.currentStreamContent }}
          </div>
          <div v-else-if="chatStore.thinkingSteps.length === 0" class="stream-text">
            <span class="typing-indicator"></span>
            思考中...
          </div>
        </div>
      </div>
    </div>

    <!-- 输入区域 -->
    <div class="chat-input">
      <textarea
        v-model="inputText"
        @keydown="handleKeydown"
        :placeholder="chatStore.isStreaming ? '等待回复完成...' : '输入编辑指令...'"
        rows="2"
        :disabled="!wsStore.isConnected || chatStore.isStreaming"
        aria-label="编辑指令输入"
      ></textarea>
      <button
        v-if="chatStore.isStreaming"
        @click="stopConversation"
        class="send-btn stop-btn"
        title="停止对话"
        aria-label="停止对话"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="6" width="12" height="12" rx="2"/>
        </svg>
      </button>
      <button
        v-else
        @click="sendMessage"
        :disabled="!inputText.trim() || !wsStore.isConnected"
        class="send-btn"
        title="发送"
        aria-label="发送消息"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="19" x2="12" y2="5"/>
          <polyline points="5 12 12 5 19 12"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
/* ==================== 容器 ==================== */
.chat-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: transparent;
}

/* ==================== 消息列表 ==================== */
.messages {
  flex: 1;
  overflow-y: auto;
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  scroll-behavior: smooth;
}

/* 滚动条样式 */
.messages::-webkit-scrollbar {
  width: 4px;
}
.messages::-webkit-scrollbar-track {
  background: transparent;
}
.messages::-webkit-scrollbar-thumb {
  background: rgba(129, 140, 248, 0.2);
  border-radius: 4px;
}
.messages::-webkit-scrollbar-thumb:hover {
  background: rgba(129, 140, 248, 0.4);
}

/* ==================== 空状态 ==================== */
.empty-state {
  text-align: center;
  padding: var(--spacing-3xl) var(--spacing-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-lg);
  animation: fadeInUp 0.4s ease-out;
}

.empty-icon-wrapper {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(129, 140, 248, 0.15) 0%, rgba(129, 140, 248, 0.05) 100%);
  border: 1px solid rgba(129, 140, 248, 0.2);
  box-shadow: 0 4px 24px rgba(129, 140, 248, 0.1);
}

.empty-icon {
  width: 28px;
  height: 28px;
  color: var(--color-primary);
  opacity: 0.8;
}

.empty-title {
  color: var(--color-text-secondary);
  font-size: 14px;
  font-weight: 500;
}

.examples {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  width: 100%;
  max-width: 300px;
}

.example {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: 12px;
  color: var(--color-text-muted);
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  transition: all 0.2s ease-out;
  cursor: pointer;
  text-align: left;
  width: 100%;
  backdrop-filter: blur(8px);
}

.example:hover {
  background: var(--glass-bg-hover);
  border-color: rgba(129, 140, 248, 0.3);
  color: var(--color-text-secondary);
  transform: translateX(4px);
}

.example:active {
  transform: translateX(2px) scale(0.98);
}

.example-icon {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  color: var(--color-primary);
  opacity: 0.6;
}

/* ==================== 消息卡片 ==================== */
.message {
  padding: var(--spacing-md);
  border-radius: var(--radius-lg);
  font-size: 13px;
  line-height: 1.65;
  max-width: 85%;
  position: relative;
  animation: messageIn 0.25s ease-out;
}

.message.user {
  background: linear-gradient(135deg, rgba(129, 140, 248, 0.25) 0%, rgba(129, 140, 248, 0.1) 100%);
  border: 1px solid rgba(129, 140, 248, 0.25);
  align-self: flex-end;
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 16px rgba(129, 140, 248, 0.08);
}

.message.assistant {
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid var(--glass-border);
  align-self: flex-start;
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.message.system {
  background: rgba(248, 113, 113, 0.12);
  border: 1px solid rgba(248, 113, 113, 0.25);
  color: var(--color-error);
  align-self: center;
  font-size: 12px;
  max-width: 90%;
  backdrop-filter: blur(8px);
}

/* ==================== 消息头部 ==================== */
.message-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-xs);
}

.role-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.role-avatar svg {
  width: 14px;
  height: 14px;
}

.role-avatar.user {
  background: linear-gradient(135deg, rgba(129, 140, 248, 0.3) 0%, rgba(129, 140, 248, 0.15) 100%);
  color: var(--color-primary);
  border: 1px solid rgba(129, 140, 248, 0.3);
}

.role-avatar.assistant {
  background: linear-gradient(135deg, rgba(52, 211, 153, 0.25) 0%, rgba(52, 211, 153, 0.1) 100%);
  color: var(--color-success);
  border: 1px solid rgba(52, 211, 153, 0.25);
}

.role-avatar.system {
  background: rgba(248, 113, 113, 0.2);
  color: var(--color-error);
  border: 1px solid rgba(248, 113, 113, 0.3);
}

.role-label {
  font-size: 11px;
  font-weight: 600;
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

/* ==================== 消息内容 ==================== */
.content {
  white-space: pre-wrap;
  word-break: break-word;
}

/* ==================== 停止/继续 ==================== */
.stopped-actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-sm);
  padding-top: var(--spacing-sm);
  border-top: 1px solid var(--glass-border);
}

.stopped-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  font-size: 10px;
  font-weight: 600;
  color: var(--color-error);
  background: rgba(248, 113, 113, 0.12);
  border: 1px solid rgba(248, 113, 113, 0.25);
  border-radius: var(--radius-sm);
}

.stopped-badge svg {
  width: 10px;
  height: 10px;
}

.continue-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 10px;
  font-size: 11px;
  font-weight: 600;
  color: var(--color-primary);
  background: rgba(129, 140, 248, 0.12);
  border: 1px solid rgba(129, 140, 248, 0.25);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.2s ease-out;
  min-height: 28px;
}

.continue-btn:hover {
  background: rgba(129, 140, 248, 0.25);
  border-color: var(--color-primary);
  transform: translateY(-1px);
}

.continue-btn:active {
  transform: translateY(0) scale(0.97);
}

.continue-btn svg {
  width: 10px;
  height: 10px;
}

/* ==================== 流式响应 ==================== */
.content.streaming {
  color: var(--color-text-secondary);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

/* 思考步骤 */
.thinking-steps {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: var(--spacing-sm) var(--spacing-md);
  background: rgba(15, 23, 42, 0.5);
  border-radius: var(--radius-sm);
  border-left: 2px solid var(--color-primary);
  backdrop-filter: blur(4px);
}

.thinking-step {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--color-text-muted);
  transition: color 0.2s ease-out;
}

.thinking-step.step-active {
  color: var(--color-text-secondary);
}

.step-done {
  width: 14px;
  height: 14px;
  color: var(--color-success);
  flex-shrink: 0;
}

.step-spinner {
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 2px solid rgba(129, 140, 248, 0.2);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  flex-shrink: 0;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.stream-text {
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
  box-shadow: 0 0 8px var(--color-primary-glow);
}

@keyframes typing {
  0%, 100% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

/* ==================== 输入区域 ==================== */
.chat-input {
  padding: var(--spacing-md);
  border-top: 1px solid var(--glass-border);
  display: flex;
  align-items: flex-end;
  gap: var(--spacing-sm);
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(16px);
  box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.1);
}

.chat-input textarea {
  flex: 1;
  height: 66px;
  padding: var(--spacing-md);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  background: rgba(15, 23, 42, 0.4);
  color: var(--color-text-primary);
  font-size: 13px;
  font-family: inherit;
  resize: none;
  outline: none;
  transition: all 0.2s ease-out;
  backdrop-filter: blur(8px);
}

.chat-input textarea:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary-glow);
  background: rgba(15, 23, 42, 0.5);
}

.chat-input textarea:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.chat-input textarea::placeholder {
  color: var(--color-text-muted);
}

/* ==================== 按钮 ==================== */
.send-btn {
  width: 44px;
  height: 44px;
  min-width: 44px;
  min-height: 44px;
  border: none;
  border-radius: var(--radius-md);
  background: linear-gradient(135deg, var(--color-primary) 0%, #a78bfa 100%);
  color: white;
  cursor: pointer;
  transition: all 0.2s ease-out;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(129, 140, 248, 0.2);
}

.send-btn svg {
  width: 18px;
  height: 18px;
}

.send-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px var(--color-primary-glow);
}

.send-btn:active:not(:disabled) {
  transform: translateY(0) scale(0.95);
}

.send-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  box-shadow: none;
}

.stop-btn {
  background: linear-gradient(135deg, var(--color-error) 0%, #dc2626 100%);
  box-shadow: 0 2px 8px rgba(248, 113, 113, 0.2);
}

.stop-btn svg {
  width: 16px;
  height: 16px;
}

.stop-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(248, 113, 113, 0.4);
}

/* ==================== 动画 ==================== */
@keyframes messageIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ==================== 移动端适配 ==================== */
@media (max-width: 767px) {
  .messages {
    padding: var(--spacing-sm);
    gap: var(--spacing-xs);
  }

  .message {
    max-width: 92%;
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
    height: 60px;
  }

  .send-btn {
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
  }

  .send-btn svg {
    width: 16px;
    height: 16px;
  }

  .empty-state {
    padding: var(--spacing-xl) var(--spacing-md);
  }

  .empty-icon-wrapper {
    width: 48px;
    height: 48px;
  }

  .empty-icon {
    width: 22px;
    height: 22px;
  }

  .empty-title {
    font-size: 13px;
  }

  .example {
    font-size: 11px;
    padding: var(--spacing-xs) var(--spacing-sm);
  }

  .example-icon {
    width: 12px;
    height: 12px;
  }

  .role-avatar {
    width: 20px;
    height: 20px;
  }

  .role-avatar svg {
    width: 12px;
    height: 12px;
  }
}

/* ==================== 无障碍 ==================== */
@media (prefers-reduced-motion: reduce) {
  .message,
  .empty-state,
  .example {
    animation: none;
  }

  .step-spinner,
  .typing-indicator {
    animation-duration: 2s;
  }

  .send-btn:hover:not(:disabled),
  .continue-btn:hover {
    transform: none;
  }
}

button:focus-visible,
textarea:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
</style>
