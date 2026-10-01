/*
 * @Author: tanshaobo
 * @Date: 2025-06-04 02:25:57
 * @LastEditors: tanshaobo
 * @LastEditTime: 2026-09-25 02:14:59
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
  showChildren: true,
  redirect: '/artifacts/stats',
  meta: {
    submenu: '/artifacts'
  },
  children: [
    {
      path: '/artifacts/stats',
      label: '词条',
      name: 'ArtifactsStats',
      menu: true,
      meta: {
        submenu: '/artifacts',
        crumb: [
          {
            path: '/artifacts',
            name: 'Artifacts',
            label: '圣遗物'
          },
          {
            path: '/artifacts/stats',
            name: 'ArtifactsStats',
            label: '词条'
          }
        ]
      },
      component: () => import('@/views/Artifacts/Stats/index.vue')
    },
    {
      path: '/artifacts/potential',
      label: '潜力',
      name: 'ArtifactsPotential',
      menu: true,
      meta: {
        submenu: '/artifacts',
        crumb: [
          {
            path: '/artifacts',
            name: 'Artifacts',
            label: '圣遗物'
          },
          {
            path: '/artifacts/potential',
            name: 'ArtifactsPotential',
            label: '潜力'
          }
        ]
      },
      component: () => import('@/views/Artifacts/Potential/index.vue')
    },
    {
      path: '/artifacts/domain',
      label: '副本',
      name: 'ArtifactsDomain',
      menu: true,
      meta: {
        submenu: '/artifacts',
        crumb: [
          {
            path: '/artifacts',
            name: 'Artifacts',
            label: '圣遗物'
          },
          {
            path: '/artifacts/domain',
            name: 'ArtifactsDomain',
            label: '副本'
          }
        ]
      },
      component: () => import('@/views/Artifacts/Domain/index.vue')
    }
  ]
}

export default artifacts