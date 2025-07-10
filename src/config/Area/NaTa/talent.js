/*
 * @Author: tanshaobo
 * @Date: 2025-04-28 15:07:09
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-07-11 01:52:33
 * @Description: 
 * @FilePath: \yuanshen-utils\src\config\Area\NaTa\talent.js
 */

import { NaTa } from './index'
import { createId } from '@/utils/Area/talent'

const talentList = [
  {
    label: '角逐',
    weekType: 1
  },
  {
    label: '焚燔',
    weekType: 2
  },
  {
    label: '纷争',
    weekType: 3
  }
]
export const talent = createId(NaTa.AreaId, talentList)