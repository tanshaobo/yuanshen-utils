/*
 * @Author: tanshaobo
 * @Date: 2025-04-28 03:22:12
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-07-11 02:09:32
 * @Description: 稻妻-天赋
 * @FilePath: \yuanshen-utils\src\config\Area\DaoQi\talent.js
 */
import Area from './index'
import { createId } from '@/utils/Area/talent'

const talentList = [
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
]

export const talent = createId(Area.AreaId, talentList)
