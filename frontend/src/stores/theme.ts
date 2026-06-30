import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

type Theme = 'dark' | 'light'

const STORAGE_KEY = 'cabinet3d-theme'
const VALID_THEMES: Theme[] = ['dark', 'light']

function getStoredTheme(): Theme {
  try {
    const t = localStorage.getItem(STORAGE_KEY)
    if (t && VALID_THEMES.includes(t as Theme)) return t as Theme
  } catch {
    // localStorage 不可用时忽略
  }
  return 'dark' // 默认暗色
}

function applyTheme(theme: Theme) {
  const html = document.documentElement
  if (theme === 'dark') {
    html.classList.add('dark')
  } else {
    html.classList.remove('dark')
  }
}

export const useThemeStore = defineStore('theme', () => {
  const theme = ref<Theme>(getStoredTheme())

  const isDark = computed(() => theme.value === 'dark')

  /**
   * 初始化主题：
   * 1. 优先读取 URI 参数 ?theme=light|dark（便于外部平台跳转指定主题）
   * 2. 其次读取 localStorage 持久化值
   * 3. 默认 dark
   */
  function init() {
    const params = new URLSearchParams(window.location.search)
    const uriTheme = params.get('theme')
    if (uriTheme && VALID_THEMES.includes(uriTheme as Theme)) {
      setTheme(uriTheme as Theme)
      return
    }
    applyTheme(theme.value)
  }

  function setTheme(t: Theme) {
    if (!VALID_THEMES.includes(t)) return
    theme.value = t
    applyTheme(t)
    try {
      localStorage.setItem(STORAGE_KEY, t)
    } catch {
      // 忽略写入失败
    }
  }

  function toggleTheme() {
    setTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  return { theme, isDark, init, setTheme, toggleTheme }
})
