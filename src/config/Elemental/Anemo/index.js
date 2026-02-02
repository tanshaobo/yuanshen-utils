/*
 * @Author: tanshaobo
 * @Date: 2025-06-20 16:51:26
 * @LastEditors: tanshaobo
 * @LastEditTime: 2026-01-08 01:37:28
 * @Description: 元素-风
 * @FilePath: \yuanshen-utils\src\config\Elemental\Anemo\index.js
 */
import { roleList } from './role'

export const AnemoRoleList = roleList.map(i => ({
  ...i,
  elemental: 'Anemo'
}))