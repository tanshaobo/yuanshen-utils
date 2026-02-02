/*
 * @Author: tanshaobo
 * @Date: 2025-06-20 16:49:13
 * @LastEditors: tanshaobo
 * @LastEditTime: 2026-01-08 01:38:18
 * @Description: 元素-水
 * @FilePath: \yuanshen-utils\src\config\Elemental\Hydro\index.js
 */
import { roleList } from './role'

export const HydroRoleList = roleList.map(i => ({
  ...i,
  elemental: 'Hydro'
}))
