import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Element Plus 已通过 unplugin-vue-components 按需自动导入，无需完整引入
import './styles/theme.css'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')
