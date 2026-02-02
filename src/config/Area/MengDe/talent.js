/*
 * @Author: tanshaobo
 * @Date: 2025-04-28 03:15:43
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-07-11 01:52:09
 * @Description: 蒙德-天赋
 * @FilePath: \yuanshen-utils\src\config\Area\MengDe\talent.js
 */
import Area from './index'
import { createTalentId } from '@/utils/Area/talent'

const talentList = [
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
]
export const talent = createTalentId(Area.AreaId, talentList)