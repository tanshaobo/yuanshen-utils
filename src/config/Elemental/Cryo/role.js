/*
 * @Author: tanshaobo
 * @Date: 2025-07-06 22:32:55
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-07-06 22:32:58
 * @Description: 元素- 冰 - 角色
 * @FilePath: \yuanshen-utils\src\config\Elemental\Cryo\role.js
 */

export const roleList = [
  {
    id: '0004',
    Name: '凯亚',
    Talent: 3,
    header: 'header/凯亚.png'
  },
  {
    id: '0015',
    Name: '重云',
    Talent: 5,
    header: 'header/重云.png'
  },
  {
    id: '0019',
    Name: '七七',
    Talent: 4,
    header: 'header/七七.png'
  },
  {
    id: '0024',
    Name: '迪奥娜',
    Talent: 1,
    header: 'header/迪奥娜.png'
  },
  {
    id: '0029',
    Name: '甘雨',
    Talent: 5,
    header: 'header/甘雨.png'
  },
  {
    id: '0032',
    Name: '罗莎莉亚',
    Talent: 3,
    header: 'header/罗莎莉亚.png'
  },
  {
    id: '0034',
    Name: '优菈',
    Talent: 2,
    header: 'header/优菈.png'
  },
  {
    id: '0036',
    Name: '神里绫华',
    Talent: 8,
    header: 'header/神里绫华.png'
  },
  {
    id: '0039',
    Name: '埃洛伊',
    Talent: 1,
    header: 'header/埃洛伊.png'
  },
  {
    id: '0047',
    Name: '申鹤',
    Talent: 4,
    header: 'header/申鹤.png'
  },
  {
    id: '0060',
    Name: '莱依拉',
    Talent: 11,
    header: 'header/莱依拉.png'
  },
  {
    id: '0066',
    Name: '米卡',
    Talent: 3,
    header: 'header/米卡.png'
  },
  {
    id: '0072',
    Name: '菲米尼',
    Talent: 14,
    header: 'header/菲米尼.png'
  },
  {
    id: '0074',
    Name: '莱欧斯利',
    Talent: 15,
    header: 'header/莱欧斯利.png'
  },
  {
    id: '0075',
    Name: '夏洛蒂',
    Talent: 14,
    header: 'header/夏洛蒂.png'
  },
  {
    id: '0093',
    Name: '茜特菈莉',
    Talent: 17,
    header: 'header/茜特菈莉.png'
  },
  {
    id: '0100',
    Name: '爱可菲',
    Talent: 14,
    header: 'header/爱可菲.png'
  },
  {
    id: '0102',
    Name: '丝柯克',
    Talent: 16,
    header: 'header/丝柯克.png'
  }
].map((item, index) => (
  {
    ...item,
    ElementId: index + 1
  }
))

export default roleList