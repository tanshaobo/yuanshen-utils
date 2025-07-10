/*
 * @Author: tanshaobo
 * @Date: 2025-04-28 03:39:09
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-07-11 01:51:48
 * @Description: 璃月-天赋
 * @FilePath: \yuanshen-utils\src\config\Area\LiYue\talent.js
 */

import Area from './index'
import { createId } from '@/utils/Area/talent'

const talentList = [
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
]
export const talent = createId(Area.AreaId, talentList)
  