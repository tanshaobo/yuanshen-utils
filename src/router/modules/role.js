/*
 * @Author: tanshaobo
 * @Date: 2022-08-18 02:18:44
 * @LastEditors: tanshaobo
 * @LastEditTime: 2026-01-02 00:15:58
 * @Description: 角色天赋
 * @FilePath: \yuanshen-utils\src\router\modules\role.js
 */
import Home from '@/views/Index.vue'

const role = {
  path: '/role',
  label: '角色',
  name: 'Role',
  component: Home,
  menu: true,
  showChildren: false,
  meta: {
    submenu: '/role'
  },
  children: [
    {
      path: '/role',
      label: '角色',
      name: 'RoleList',
      menu: false,
      meta: {
        submenu: '/role',
        crumb: [
          {
            path: '/role',
            name: 'RoleList',
            label: '角色'
          }
        ]
      },
      component: () => import('@/views/Role/Index.vue')
    },
    {
      path: '/roleEdit/:id',
      label: '角色编辑',
      name: 'RoleEdit',
      menu: false,
      meta: {
        submenu: '/role',
        crumb: [
          {
            path: '/role',
            name: 'RoleList',
            label: '角色'
          },
          {
            path: '/roleEdit',
            name: 'RoleEdit',
            label: '编辑'
          }
        ]
      },
      component: () => import('@/views/Role/Edit.vue')
    },
    {
      path: '/roleDetail/:id',
      label: '角色详情',
      name: 'RoleDetail',
      menu: false,
      meta: {
        submenu: '/role',
        crumb: [
          {
            path: '/role',
            name: 'RoleList',
            label: '角色'
          },
          {
            path: '/roleDetail',
            name: 'RoleDetail',
            label: '详情'
          }
        ]
      },
      component: () => import('@/views/Role/Detail.vue')
    }
  ]
}

export default role
