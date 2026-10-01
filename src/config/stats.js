/*
 * @Author: tanshaobo
 * @Date: 2025-09-28 01:03:41
 * @LastEditors: tanshaobo
 * @LastEditTime: 2026-09-25 03:09:58
 * @Description: 词条
 * @FilePath: \yuanshen-utils\src\config\stats.js
 */

export const baseStats = [
   {
    label: 'ATK',
    id: 1,
    desc: '攻击力%',
  },
  {
    label: 'DEF',
    id: 2,
    desc: '防御力%',
  },
  {
    label: 'HP',
    id:3,
    desc: '生命值%',
  },
  {
    label: 'Atk',
    id:4,
    desc: '攻击力',
  },
  {
    label: 'Def',
    id:5,
    desc: '防御力',
  },
  {
    label: 'Hp',
    id:6,
    desc: '生命值',
  },
  {
    label: 'CR',
    id:7,
    desc: '暴击率',
  },
  {
    label: 'CD',
    id:8,
    desc: '暴击伤害',
  },
  {
    label: 'EM',
    id:9,
    desc: '元素精通',
  },
  {
    label: 'ER',
    id:10,
    desc: '充能效率',
  },
  {
    label: 'PB',
    id:11,
    desc: '伤害加成',
  },
  {
    label: 'HB',
    id: 12,
    desc: '治疗加成',
  }

]

const partsList = [
  {
      id: 'flower',
      label: '生之花',
  },
  {
      id: 'plume',
      label: '死之羽',
  },
  {
      id: 'sands',
      label: '时之沙',
  },
  {
      id: 'goblet',
      label: '空之杯',
  },
  {
      id: 'circlet',
      label: '理之冠',
  }
]

const partsMainStats = {
  flower: [6],
  plume: [4],
  sands: [1, 2, 3, 4, 5, 6, 9, 10],
  goblet: [1, 2, 3, 4, 5, 6, 9, 11],
  circlet: [1, 2, 3, 4, 5, 6, 7, 8, 9, 12],
}

export function getMainStatsByPart(partId) {
  const ids = partsMainStats[partId] || []
  return baseStats.filter((s) => ids.includes(s.id))
}

export { partsList, partsMainStats }