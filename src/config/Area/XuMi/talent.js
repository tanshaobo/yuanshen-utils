/*
 * @Author: tanshaobo
 * @Date: 2025-04-28 15:10:04
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-04-28 15:17:51
 * @Description: 须弥-天赋
 * @FilePath: \yuanshen-utils\src\config\Area\XuMi\talent.js
 */

import { XuMi } from './index'

export const talent = [
  {
    label: '诤言',
    weekType: 1
  },
  {
    label: '巧思',
    weekType: 2
  },
  {
    label: '笃行',
    weekType: 3
  }
].map((i, j) => ({
  ...i,
  id: (Number(XuMi.AreaId) - 1) * 3 + j + 1,
  areaId: XuMi.AreaId
}))