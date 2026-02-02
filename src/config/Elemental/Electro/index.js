/*
 * @Author: tanshaobo
 * @Date: 2025-06-20 16:58:14
 * @LastEditors: tanshaobo
 * @LastEditTime: 2026-01-08 01:37:09
 * @Description: 元素-雷
 * @FilePath: \yuanshen-utils\src\config\Elemental\Electro\index.js
 */
import { roleList } from './role'

export const ElectroRoleList = roleList.map(i => ({
  ...i,
  elemental: 'Electro'
}))