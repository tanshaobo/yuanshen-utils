/*
 * @Author: tanshaobo
 * @Date: 2025-07-06 22:36:51
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-07-06 22:36:59
 * @Description: 元素-水-角色
 * @FilePath: \yuanshen-utils\src\config\Elemental\Hydro\role.js
 */

export const roleList = [
  {
    id: '0006',
    Name: '芭芭拉',
    Talent: 1,
    header: 'header/芭芭拉.png'
  },
  {
    id: '0010',
    Name: '行秋',
    Talent: 6,
    header: 'header/行秋.png'
  },
  {
    id: '0020',
    Name: '莫娜',
    Talent: 2,
    header: 'header/莫娜.png'
  },
  {
    id: '0025',
    Name: '达达利亚',
    Talent: 1,
    header: 'header/达达利亚.png'
  },
  {
    id: '0042',
    Name: '珊瑚宫心海',
    Talent: 7,
    header: 'header/珊瑚宫心海.png'
  },
  {
    id: '0049',
    Name: '神里绫人',
    Talent: 8,
    header: 'header/神里绫人.png'
  },
  {
    id: '0050',
    Name: '夜兰',
    Talent: 4,
    header: 'header/夜兰.png'
  },
  {
    id: '0056',
    Name: '坎蒂丝',
    Talent: 10,
    header: 'header/坎蒂丝.png'
  }, {
    id: '0058',
    Name: '妮露',
    Talent: 12,
    header: 'header/妮露.png'
  },
  {
    id: '0073',
    Name: '纳维莱特',
    Talent: 13,
    header: 'header/纳维莱特.png'
  },
  {
    id: '0076',
    Name: '芙宁娜',
    Talent: 14,
    header: 'header/芙宁娜.png'
  },
  {
    id: '0085',
    Name: '希格雯',
    Talent: 13,
    header: 'header/希格雯.png'
  },
  {
    id: '0088',
    Name: '玛拉妮',
    Talent: 16,
    header: 'header/玛拉妮.png'
  },
  {
    id: '0101',
    Name: '塔利雅',
    Talent: 3,
    header: 'header/塔利雅.png'
  }
].map((item, index) => (
  {
    ...item,
    ElementId: index + 1
  }
))

export default roleList