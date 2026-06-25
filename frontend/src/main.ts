import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/theme.css'
import App from './App.vue'

// 启用 Element Plus 暗色模式
document.documentElement.classList.add('dark')

const app = createApp(App)
app.use(createPinia())
app.use(ElementPlus)
app.mount('#app')