/*
 * @Author: tanshaobo
 * @Date: 2022-11-18 10:00:38
 * @LastEditors: tanshaobo
 * @LastEditTime: 2026-09-23 01:42:56
 * @Description: Vite 5 升级配置，移除 vite-plugin-fs，alias 改为对象形式
 * @FilePath: \yuanshen-utils\vite.config.js
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    host: 'localhost',
    port: 9527,
    open: true,
    cors: true,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api/, '')
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
})