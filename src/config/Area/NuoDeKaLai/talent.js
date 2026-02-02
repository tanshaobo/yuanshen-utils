/*
 * @Author: tanshaobo
 * @Date: 2025-04-28 15:07:09
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-07-11 02:15:50
 * @Description: 
 * @FilePath: \yuanshen-utils\src\config\Area\NuoDeKaLai\talent.js
 */

import Area from './index'
import { createTalentId } from '@/utils/Area/talent'

const talentList = [
  {
    label: '墟都',
    weekType: 1
  },
  {
    label: '遗荫',
    weekType: 2
  },
  {
    label: '覆巢',
    weekType: 3
  }
]
export const talent = createTalentId(Area.AreaId, talentList)