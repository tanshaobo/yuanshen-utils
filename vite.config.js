/*
 * @Author: tanshaobo
 * @Date: 2022-11-18 10:00:38
 * @LastEditors: tanshaobo
 * @LastEditTime: 2026-09-23 02:27:54
 * @Description: Vite 5 升级配置，移除 vite-plugin-fs，alias 改为对象形式
 * @FilePath: \yuanshen-utils\vite.config.js
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? './' : '/',
  resolve: {
    alias: {
      '@': path.resolve(fileURLToPath(new URL('.', import.meta.url)), './src')
    }
  },
  server: {
    host: 'localhost',
    port: 5173,
    open: true,
    cors: true,
    strictPort: false,
    proxy: {
      '/api': {
        target: `http://localhost:${process.env.PORT || 3001}`,
        changeOrigin: true
      }
    }
  },
  css: {
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:5]'
    }
  },
  build: {
    outDir: 'docs'
  },
  plugins: [vue()]
}))