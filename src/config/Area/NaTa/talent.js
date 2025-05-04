/*
 * @Author: tanshaobo
 * @Date: 2025-04-28 15:07:09
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-04-28 15:18:32
 * @Description: 
 * @FilePath: \yuanshen-utils\src\config\Area\NaTa\talent.js
 */

import { NaTa } from './index'

export const talent = [
  {
    label: '角逐',
    weekType: 1
  },
  {
    label: '焚燔',
    weekType: 2
  },
  {
    label: '纷争',
    weekType: 3
  }
].map((i, j) => ({
  ...i,
  id: (Number(NaTa.AreaId) - 1) * 3 + j + 1,
  areaId: NaTa.AreaId
}))