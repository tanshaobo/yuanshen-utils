/*
 * @Author: tanshaobo
 * @Date: 2025-04-28 03:39:09
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-04-28 03:40:52
 * @Description: 璃月-天赋
 * @FilePath: \yuanshen-utils\src\config\LiYue\talent.js
 */

import { LiYue } from './index'

export const talent = [
  {
    label: '繁荣',
    weekType: 1
  },
  {
    label: '勤劳',
    weekType: 2
  },
  {
    label: '黄金',
    weekType: 3
  }
].map((i, j) => ({
  ...i,
  id: (Number(LiYue.AreaId) - 1) * 3 + j + 1,
  areaId: LiYue.AreaId
}))