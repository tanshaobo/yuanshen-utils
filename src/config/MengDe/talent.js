/*
 * @Author: tanshaobo
 * @Date: 2025-04-28 03:15:43
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-04-28 03:37:11
 * @Description: 蒙德-天赋
 * @FilePath: \yuanshen-utils\src\config\MengDe\talent.js
 */
import { MengDe } from './index'

export const talent = [
  {
    label: '自由',
    weekType: 1
  },
  {
    label: '抗争',
    weekType: 2
  },
  {
    label: '诗文',
    weekType: 3
  },
].map((i, j) => ({
  ...i,
  id: (Number(MengDe.AreaId) - 1) * 3 + j + 1,
  areaId: MengDe.AreaId
}))