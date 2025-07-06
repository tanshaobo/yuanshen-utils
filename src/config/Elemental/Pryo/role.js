/*
 * @Author: tanshaobo
 * @Date: 2025-07-06 22:37:42
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-07-07 02:11:43
 * @Description: 元素-火-角色
 * @FilePath: \yuanshen-utils\src\config\Elemental\Pryo\role.js
 */

export const roleList = [
  {
    id: '0003',
    Name: '安柏',
    Talent: 1,
    header: 'header/安柏.png'
  },
  {
    id: '0008',
    Name: '香菱',
    Talent: 5,
    header: 'header/香菱.png'
  },
  {
    id: '0013',
    Name: '班尼特',
    Talent: 2,
    header: 'header/班尼特.png'
  },
  {
    id: '0018',
    Name: '迪卢克',
    Talent: 2,
    header: 'header/迪卢克.png'
  },
  {
    id: '0023',
    Name: '可莉',
    Talent: 1,
    header: 'header/可莉.png'
  },
  {
    id: '0026',
    Name: '辛焱',
    Talent: 6,
    header: 'header/辛焱.png'
  },
  {
    id: '0031',
    Name: '胡桃',
    Talent: 5,
    header: 'header/胡桃.png'
  },
  {
    id: '0033',
    Name: '烟绯',
    Talent: 6,
    header: 'header/烟绯.png'
  },
  {
    id: '0038',
    Name: '宵宫',
    Talent: 7,
    header: 'header/宵宫.png'
  },
  {
    id: '0043',
    Name: '托马',
    Talent: 7,
    header: 'header/托马.png'
  },
  {
    id: '0065',
    Name: '迪希雅',
    Talent: 12,
    header: 'header/迪希雅.png'
  },
  {
    id: '0071',
    Name: '林尼',
    Talent: 13,
    header: 'header/林尼.png'
  },
  {
    id: '0078',
    Name: '夏沃蕾',
    Talent: 15,
    header: 'header/夏沃蕾.png'
  },
  {
    id: '0079',
    Name: '嘉明',
    Talent: 4,
    header: 'header/嘉明.png'
  },
  {
    id: '0082',
    Name: '阿蕾奇诺',
    Talent: 15,
    header: 'header/阿蕾奇诺.png'
  },
  {
    id: '0094',
    Name: '玛薇卡',
    Talent: 16,
    header: 'header/玛薇卡.png'
  },
].map((item, index) => (
  {
    ...item,
    ElementId: index + 1
  }
))

export default roleList