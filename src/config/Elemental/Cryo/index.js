/*
 * @Author: tanshaobo
 * @Date: 2025-06-20 16:50:40
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-06-20 16:50:44
 * @Description: 元素-冰
 * @FilePath: \yuanshen-utils\src\config\Elemental\Cryo\index.js
 */
import { roleList } from './role'

export const CryoRoleList = roleList.map(i => ({
  ...i,
  elemental: 'Cryo'
}))