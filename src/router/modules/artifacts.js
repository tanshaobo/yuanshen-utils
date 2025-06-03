/*
 * @Author: tanshaobo
 * @Date: 2025-06-04 02:25:57
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-06-04 02:39:58
 * @Description: 圣遗物
 * @FilePath: \yuanshen-utils\src\router\modules\artifacts.js
 */
import Home from '@/views/Index.vue'

const artifacts = {
  path: '/artifacts',
  label: '圣遗物',
  name: 'Artifacts',
  component: Home,
  menu: true,
  showChildren: false,
  meta: {
    submenu: '/artifacts'
  },
  children: [
    {
      path: '/artifacts',
      label: '列表',
      name: 'artifacts',
      menu: false,
      meta: {
        submenu: '/artifacts',
        crumb: [
          {
            path: '/artifacts',
            name: 'artifacts',
            label: '副本'
          }
        ]
      },
      component: () => import('@/views/Artifacts/Index.vue')
    }
  ]
}

export default artifacts