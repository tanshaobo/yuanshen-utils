/*
 * @Author: tanshaobo
 * @Date: 2025-07-08 02:05:27
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-07-26 01:59:04
 * @Description: 蒙德-圣遗物
 * @FilePath: \yuanshen-utils\src\config\Area\MengDe\relics.js
 */
import Area from './index'
import { addInstanceId, addRelicsId } from '@/utils/Area/relics'
import { Totree } from '@/utils/toTree'

const instanceList = [
  {
    label: '仲夏庭园'
  },
  {
    label: '铭记之谷',
  },
  {
    label: '芬德尼尔之顶',
  },
  {
    label: '山脊守望',
  }
  
]

const instance =addInstanceId(Area.AreaId,instanceList)

const relicsList = [
  {
    instanceId: instance[0].id,
    label: '如雷的盛怒'
  },
  {
    instanceId: instance[0].id,
    label: '平息鸣雷的尊者'
  },
  {
    instanceId: instance[1].id,
    label: '翠绿之影'
  },
  {
    instanceId: instance[1].id,
    label: '被怜爱的少女'
  },
  {
    instanceId: instance[2].id,
    label: '沉沦之心'
  },
  {
    instanceId: instance[2].id,
    label: '冰风迷途的勇士'
  },
  {
    instanceId: instance[3].id,
    label: '千岩牢固'
  },
  {
    instanceId: instance[3].id,
    label: '苍白之火'
  },
]

export const relics = addRelicsId(relicsList)

export const instanceData = Totree([...instance, ...relics], Area.AreaId, 'id', 'instanceId')
