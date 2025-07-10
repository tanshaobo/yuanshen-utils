/*
 * @Author: tanshaobo
 * @Date: 2025-04-28 15:05:56
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-07-11 02:14:55
 * @Description: 枫丹-天赋
 * @FilePath: \yuanshen-utils\src\config\Area\FengDan\talent.js
 */

import Area from './index'
import { createId } from '@/utils/Area/talent'

const talentList = [
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
]

export const talent = createId(Area.AreaId, talentList)