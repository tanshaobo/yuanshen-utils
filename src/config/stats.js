/*
 * @Author: tanshaobo
 * @Date: 2025-09-28 01:03:41
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-12-27 21:23:00
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

const createList = (partId) => {
  let list1, list2
  if(partId === 1){
    list1 = baseStats.filter(i=>i.id === 4)
    list2 = baseStats.filter(i=>[].includes(i.id))
  }


}