/*
 * @Author: tanshaobo
 * @Date: 2022-08-18 02:34:47
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-05-04 23:41:34
 * @Description: file content
 * @FilePath: \yuanshen-utils\src\config\Area\index.js
 */
import { MengDe } from "./MengDe"
import { LiYue } from "./LiYue"
import { DaoQi } from "./DaoQi"
import { XuMi } from "./XuMi"
import { FengDan } from "./FengDan"
import { NaTa } from "./NaTa"
import { ZhiDong } from "./ZhiDong"
import { KaiRuiYa } from "./KaiRuiYa"
import { TianKongDao } from "./TianKongDao"
import { ShenYuan } from "./ShenYuan"

export const areas = [
  MengDe,
  LiYue,
  DaoQi,
  XuMi,
  FengDan,
  NaTa,
  ZhiDong,
  KaiRuiYa,
  TianKongDao,
  ShenYuan
]

console.log(areas)
export default areas
