/*
 * @Author: tanshaobo
 * @Date: 2022-08-18 02:18:44
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-08-18 02:23:04
 * @Description: 角色天赋路由
 * @FilePath: \yuanshen-utils\src\router\modules\roleTalent.js
 */
import Home from '@/views/Index.vue'

const roleTalent = {
  path: '/roleTalent',
  label: '角色天赋',
  name: 'RoleTalent',
  component: Home,
  menu: true,
  showChildren: false,
  meta: {
    submenu: '/roleTalent'
  },
  children: [
    {
      path: '/roleTalent',
      label: '列表',
      name: 'roleTalent',
      menu: false,
      meta: {
        submenu: '/roleTalent',
        crumb: [
          {
            path: '/roleTalent',
            name: 'RoleTalentList',
            label: '列表'
          }
        ]
      },
      component: () => import('@/views/RoleTalent/Index.vue')
    }
  ]
}

export default roleTalent
