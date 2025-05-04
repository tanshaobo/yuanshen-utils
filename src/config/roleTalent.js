/*
 * @Author: tanshaobo
 * @Date: 2022-08-18 02:30:08
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-05-04 23:52:19
 * @Description: 角色天赋
 * @FilePath: \yuanshen-utils\src\config\roleTalent.js
 */
export const weekType = {
  1: [0, 1, 4],
  2: [0, 2, 5],
  3: [0, 3, 6]
}
import { talent as MengDeTalent } from '@/config/Area/MengDe/talent'
import { talent as LiYueTalent } from '@/config/Area/LiYue/talent'
import { talent as DaoQiTalent } from '@/config/Area/DaoQi/talent'
import { talent as XuMiTalent } from '@/config/Area/XuMi/talent'
import { talent as FengDanTalent } from '@/config/Area/FengDan/talent'
import { talent as NaTaTalent } from '@/config/Area/NaTa/talent'

export const talentMaterial = [
  ...MengDeTalent,
  ...LiYueTalent,
  ...DaoQiTalent,
  ...XuMiTalent,
  ...FengDanTalent,
  ...NaTaTalent
]
export default talentMaterial
