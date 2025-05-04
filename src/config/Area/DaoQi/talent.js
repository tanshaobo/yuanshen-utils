/*
 * @Author: tanshaobo
 * @Date: 2025-04-28 03:22:12
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-04-28 03:36:10
 * @Description: 稻妻-天赋
 * @FilePath: \yuanshen-utils\src\config\Area\DaoQi\talent.js
 */
import { DaoQi } from './index'

export const talent = [
  {
    label: '浮世',
    weekType: 1
  },
  {
    label: '风雅',
    weekType: 2
  },
  {
    label: '天光',
    weekType: 3
  }
].map((i, j) => ({
  ...i,
  id: (Number(DaoQi.AreaId) - 1) * 3 + j + 1,
  areaId: DaoQi.AreaId
}))