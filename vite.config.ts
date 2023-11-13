import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//按需自动引入API
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      /* 全局引入并注册*/
      imports: ['vue', 'vue-router', 'pinia'], // 自动导入vue/vue-router/pinia相关函数
      // 设置生成 .d.ts 文件的路径  (生成 `auto-import.d.ts` 全局声明)
      // ./src/auto-imports.d.ts 这个目录更符合 vite-vue-ts 项目的 typescript 的配置
      dts: './src/auto-imports.d.ts', // 默认是：'./auto-imports.d.ts'
      //官方建议使用 TypeScript 时，直接禁用规则，因为 TypeScript 已经检查了它们，无需担心这一点。no-undef
      eslintrc: {
        enabled: true //
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
