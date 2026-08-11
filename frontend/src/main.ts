import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Element Plus 已通过 unplugin-vue-components 按需自动导入，无需完整引入
// ElMessage 是命令式 API，需手动导入其样式
import 'element-plus/es/components/message/style/css'
import './styles/theme.css'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')

// 记录访客量（fire-and-forget，不影响首屏渲染）
fetch('/api/v1/visit/record', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'LLM柜子3D模型在线编辑器' }),
}).catch(() => {})
