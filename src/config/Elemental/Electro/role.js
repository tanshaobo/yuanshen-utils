/*
 * @Author: tanshaobo
 * @Date: 2025-07-06 22:35:06
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-07-07 02:09:44
 * @Description: 元素-雷-角色
 * @FilePath: \yuanshen-utils\src\config\Elemental\Electro\role.js
 */

export const roleList = [
  {
    id: '0005',
    Name: '丽莎',
    Talent: 3,
    header: 'header/丽莎.png'
  },
  {
    id: '0007',
    Name: '雷泽',
    Talent: 2,
    header: 'header/雷泽.png'
  },
  {
    id: '0009',
    Name: '北斗',
    Talent: 6,
    header: 'header/北斗.png'
  },
  {
    id: '0012',
    Name: '菲谢尔',
    Talent: 3,
    header: 'header/菲谢尔.png'
  },
  {
    id: '0021',
    Name: '刻晴',
    Talent: 4,
    header: 'header/刻晴.png'
  },
  {
    id: '0040',
    Name: '九条裟罗',
    Talent: 8,
    header: 'header/九条裟罗.png'
  },
  {
    id: '0041',
    Name: '雷电将军',
    Talent: 9,
    header: 'header/雷电将军.png'
  },
  {
    id: '0048',
    Name: '八重神子',
    Talent: 9,
    header: 'header/八重神子.png'
  },
  {
    id: '0051',
    Name: '久岐忍',
    Talent: 8,
    header: 'header/久岐忍.png'
  },
  {
    id: '0055',
    Name: '多莉',
    Talent: 11,
    header: 'header/多莉.png'
  },
  {
    id: '0057',
    Name: '赛诺',
    Talent: 10,
    header: 'header/赛诺.png'
  },
  {
    id: '0083',
    Name: '赛索斯',
    Talent: 12,
    header: 'header/赛索斯.png'
  },
  {
    id: '0084',
    Name: '克洛琳德',
    Talent: 14,
    header: 'header/克洛琳德.png'
  },
  {
    id: '0088',
    Name: '玛拉妮',
    Talent: 16,
    header: 'header/玛拉妮.png'
  },
  {
    id: '0091',
    Name: '欧洛伦',
    Talent: 17,
    header: 'header/欧洛伦.png'
  },
  
  {
    id: '0097',
    Name: '伊安珊',
    Talent: 16,
    header: 'header/伊安珊.png'
  },
  {
    id: '0098',
    Name: '瓦雷莎',
    Talent: 18,
    header: 'header/瓦雷莎.png'
  },
].map((item, index) => (
  {
    ...item,
    ElementId: index + 1
  }
))

export default roleList