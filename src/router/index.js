import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './modules'
// 创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
