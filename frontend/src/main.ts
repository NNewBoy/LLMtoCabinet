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
