import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  base: '/llmtocabinet/',
  plugins: [
    vue(),
    // Element Plus 按需自动导入组件及样式
    Components({
      resolvers: [ElementPlusResolver({ importStyle: 'css' })],
    }),
    // Gzip 压缩
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240, // 仅压缩 >10KB 的文件
    }),
    // Brotli 压缩（更高的压缩率）
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
    }),
  ],
  server: {
    port: 5174,
    proxy: {
      '/api/v1': 'http://localhost:8000',
      '/api': 'http://localhost:8001',
      '/ws': {
        target: 'ws://localhost:8001',
        ws: true,
      },
      '/render_api': {
        target: 'http://localhost:8002',
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        // 拆包：大型库独立 chunk，便于浏览器缓存
        manualChunks: {
          'vendor-three': ['three'],
          'vendor-element-plus': ['element-plus'],
          'vendor-vue': ['vue', 'pinia'],
        },
      },
    },
    // 提高 chunk 大小警告阈值（three 本身就大）
    chunkSizeWarningLimit: 600,
  },
})
