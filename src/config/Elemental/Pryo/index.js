/*
 * @Author: tanshaobo
 * @Date: 2025-06-20 16:46:33
 * @LastEditors: tanshaobo
 * @LastEditTime: 2026-01-08 01:38:48
 * @Description: 元素-火
 * @FilePath: \yuanshen-utils\src\config\Elemental\Pryo\index.js
 */
import { roleList } from './role'

export const PryoRoleList = roleList.map(i => ({
  ...i,
  elemental: 'Pryo'
}))
