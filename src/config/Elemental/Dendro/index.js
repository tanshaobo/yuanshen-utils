/*
 * @Author: tanshaobo
 * @Date: 2025-06-20 16:56:42
 * @LastEditors: tanshaobo
 * @LastEditTime: 2026-01-08 01:36:33
 * @Description: 元素-草
 * @FilePath: \yuanshen-utils\src\config\Elemental\Dendro\index.js
 */
import { roleList } from './role'

export const DendroRoleList = roleList.map(i => ({
  ...i,
  elemental: 'Dendro'
}))
