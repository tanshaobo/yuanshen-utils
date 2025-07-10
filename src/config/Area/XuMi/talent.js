/*
 * @Author: tanshaobo
 * @Date: 2025-04-28 15:10:04
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-07-11 01:52:53
 * @Description: 须弥-天赋
 * @FilePath: \yuanshen-utils\src\config\Area\XuMi\talent.js
 */

import Area from './index'
import { createId } from '@/utils/Area/talent'

const talentList = [
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
]
export const talent = createId(Area.AreaId, talentList)