// API 基础路径配置
// 开发环境使用根路径，生产环境使用 /llmtocabinet 子路径
export const API_BASE = import.meta.env.DEV ? '' : '/llmtocabinet'
export const WS_PATH = '/ws'

// 构建 API URL
export function apiUrl(path: string): string {
  return `${API_BASE}${path}`
}

// 构建 WebSocket URL
export function wsUrl(projectId: string): string {
  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:'
  return `${protocol}//${window.location.host}${API_BASE}${WS_PATH}/${projectId}`
}
