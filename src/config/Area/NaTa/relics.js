/*
 * @Author: tanshaobo
 * @Date: 2025-07-08 02:52:51
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-07-08 02:54:40
 * @Description: 纳塔-圣遗物
 * @FilePath: \yuanshen-utils\src\config\Area\NaTa\relics.js
 */
import Area from './index'
import { addInstanceId, addRelicsId } from '@/utils/Area/relics'
import { Totree } from '@/utils/toTree'

const instanceList = [
  {
    label: '虹灵的净土'
  },
  {
    label: '荒废砌造坞',
  }
]

const instance =addInstanceId(Area.AreaId,instanceList)

const relicsList = [
  {
    instanceId: instance[0].id,
    label: '黑曜秘典'
  },
  {
    instanceId: instance[0].id,
    label: '烬城勇者绘卷'
  },
  {
    instanceId: instance[1].id,
    label: '长夜之誓'
  },
  {
    instanceId: instance[1].id,
    label: '深廊终曲'
  }
]


export const relics = addRelicsId(relicsList)

export const instanceData = Totree([...instance, ...relics], Area.AreaId, 'id', 'instanceId')
