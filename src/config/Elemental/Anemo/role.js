/*
 * @Author: tanshaobo
 * @Date: 2025-06-20 17:14:14
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-07-07 02:07:24
 * @Description: 元素-风-角色
 * @FilePath: \yuanshen-utils\src\config\Elemental\Anemo\role.js
 */

export const roleList = [
  {
    id: '0016',
    Name: '砂糖',
    Talent: 1,
    header: 'header/砂糖.png'
  },
  {
    id: '0017',
    Name: '琴',
    Talent: 2,
    header: 'header/琴.png'
  },
  {
    id: '0022',
    Name: '温迪',
    Talent: 3,
    header: 'header/温迪.png'
  },
  {
    id: '0030',
    Name: '魈',
    Talent: 4,
    header: 'header/魈.png'
  },
  {
    id: '0035',
    Name: '枫原万叶',
    Talent: 5,
    header: 'header/枫原万叶.png'
  },
  {
    id: '0037',
    Name: '早柚',
    Talent: 9,
    header: 'header/早柚.png'
  },
  {
    id: '0052',
    Name: '鹿野院平藏',
    Talent: 7,
    header: 'header/鹿野院平藏.png'
  },
  {
    id: '0061',
    Name: '珐露珊',
    Talent: 10,
    header: 'header/珐露珊.png'
  },
  {
    id: '0062',
    Name: '流浪者',
    Talent: 12,
    header: 'header/流浪者.png'
  },
  {
    id: '0070',
    Name: '琳妮特',
    Talent: 15,
    header: 'header/琳妮特.png'
  },
  {
    id: '0080',
    Name: '闲云',
    Talent: 6,
    header: 'header/闲云.png'
  },
  {
    id: '0092',
    Name: '恰斯卡',
    Talent: 18,
    header: 'header/恰斯卡.png'
  },
  {
    id: '0095',
    Name: '蓝砚',
    Talent: 5,
    header: 'header/蓝砚.png'
  },
  {
    id: '0096',
    Name: '梦见月瑞希',
    Talent: 7,
    header: 'header/梦见月瑞希.png'
  },
  {
    id: '0099',
    Name: '伊法',
    Talent: 18,
    header: 'header/伊法.png'
  }
].map((item, index) => (
  {
    ...item,
    ElementId: index + 1
  }
))