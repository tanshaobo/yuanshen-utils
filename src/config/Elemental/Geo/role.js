/*
 * @Author: tanshaobo
 * @Date: 2025-07-06 22:35:55
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-07-07 01:45:34
 * @Description: 元素-岩-角色
 * @FilePath: \yuanshen-utils\src\config\Elemental\Geo\role.js
 */

export const roleList = [
  {
    id: '0011',
    Name: '凝光',
    Talent: 4,
    header: 'header/凝光.png'
  },
  {
    id: '0014',
    Name: '诺艾尔',
    Talent: 2,
    header: 'header/诺艾尔.png'
  },
  {
    id: '0027',
    Name: '钟离',
    Talent: 6,
    header: 'header/钟离.png'
  },
  {
    id: '0028',
    Name: '阿贝多',
    Talent: 3,
    header: 'header/阿贝多.png'
  },
  {
    id: '0044',
    Name: '五郎',
    Talent: 9,
    header: 'header/五郎.png'
  },
  {
    id: '0045',
    Name: '荒泷一斗',
    Talent: 8,
    header: 'header/荒泷一斗.png'
  },
  {
    id: '0046',
    Name: '云堇',
    Talent: 5,
    header: 'header/云堇.png'
  },
  {
    id: '0077',
    Name: '娜维娅',
    Talent: 13,
    header: 'header/娜维娅.png'
  },
  {
    id: '0081',
    Name: '千织',
    Talent: 9,
    header: 'header/千织.png'
  },
  {
    id: '0087',
    Name: '卡齐娜',
    Talent: 18,
    header: 'header/卡齐娜.png'
  },
  {
    id: '0090',
    Name: '希诺宁',
    Talent: 17,
    header: 'header/希诺宁.png'
  },
].map((item, index) => (
  {
    ...item,
    ElementId: index + 1
  }
))

export default roleList