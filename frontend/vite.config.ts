import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/llmtocabinet/',
  plugins: [vue()],
  server: {
    port: 5174,
    proxy: {
      '/api': 'http://localhost:8001',
      '/ws': {
        target: 'ws://localhost:8001',
        ws: true,
      },
      '/renderApi': {
        target: 'http://localhost:8002',
        rewrite: (path) => path.replace(/^\/renderApi/, '/api'),
      }
    },
  },
})
