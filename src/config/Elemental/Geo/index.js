/*
 * @Author: tanshaobo
 * @Date: 2025-06-20 16:57:28
 * @LastEditors: tanshaobo
 * @LastEditTime: 2026-01-08 01:37:53
 * @Description: 元素-岩
 * @FilePath: \yuanshen-utils\src\config\Elemental\Geo\index.js
 */
import { roleList } from './role'

export const GeoRoleList = roleList.map(i => ({
  ...i,
  elemental: 'Geo'
}))
