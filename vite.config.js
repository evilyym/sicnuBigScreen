import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from "path"

// https://vitejs.dev/config/
const buildConfig = {
  outDir: 'dist/sicnuCockpitBigScreen',
  terserOptions: {
    compress: {
      drop_console: true, // 生产环境移除console
      drop_debugger: true // 生产环境移除debugger
    }
  },
  rollupOptions: {
    output: {
      manualChunks: {
        // echarts: ['echarts']
      }
    }
  }
}
export default defineConfig({
  plugins: [vue()],
  base: '/sicnuCockpitBigScreen/',
  resolve: {
    alias: [ // 配置 @ 指代 src
      {
        find: "@",
        replacement: resolve(__dirname, "./src"),
      }
    ],
  },
  build: { minify: 'terser', ...buildConfig },
  server: {
    // 开启热更新
    hmr: true
  }
})
