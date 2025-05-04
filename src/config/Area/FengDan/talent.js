/*
 * @Author: tanshaobo
 * @Date: 2025-04-28 15:05:56
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-04-28 15:17:16
 * @Description: 枫丹-天赋
 * @FilePath: \yuanshen-utils\src\config\Area\FengDan\talent.js
 */

import { FengDan } from './index'

export const talent = [
  {
    label: '公平',
    weekType: 1
  },
  {
    label: '正义',
    weekType: 2
  },
  {
    label: '秩序',
    weekType: 3
  }
].map((i, j) => ({
  ...i,
  id: (Number(FengDan.AreaId) - 1) * 3 + j + 1,
  areaId: FengDan.AreaId
}))