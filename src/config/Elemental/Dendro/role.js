/*
 * @Author: tanshaobo
 * @Date: 2025-07-06 22:33:47
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-07-07 01:45:26
 * @Description: 元素-草-角色
 * @FilePath: \yuanshen-utils\src\config\Elemental\Dendro\role.js
 */

export const roleList = [
  {
    id: '0053',
    Name: '柯莱',
    Talent: 12,
    header: 'header/柯莱.png'
  },
  {
    id: '0054',
    Name: '提纳里',
    Talent: 10,
    header: 'header/提纳里.png'
  },
  {
    id: '0059',
    Name: '纳西妲',
    Talent: 11,
    header: 'header/纳西妲.png'
  },
  {
    id: '0063',
    Name: '瑶瑶',
    Talent: 5,
    header: 'header/瑶瑶.png'
  },
  {
    id: '0064',
    Name: '艾尔海森',
    Talent: 11,
    header: 'header/艾尔海森.png'
  },
  {
    id: '0067',
    Name: '卡维',
    Talent: 11,
    header: 'header/卡维.png'
  },
  {
    id: '0068',
    Name: '白术',
    Talent: 6,
    header: 'header/白术.png'
  },
  {
    id: '0069',
    Name: '绮良良',
    Talent: 7,
    header: 'header/绮良良.png'
  },
  {
    id: '0086',
    Name: '艾梅莉埃',
    Talent: 15,
    header: 'header/艾梅莉埃.png'
  },
  {
    id: '0089',
    Name: '基尼奇',
    Talent: 17,
    header: 'header/基尼奇.png'
  },
].map((item, index) => (
  {
    ...item,
    ElementId: index + 1
  }
))

export default roleList