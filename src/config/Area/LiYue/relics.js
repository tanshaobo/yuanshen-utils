/*
 * @Author: tanshaobo
 * @Date: 2025-07-08 02:11:45
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-07-26 01:57:18
 * @Description: 璃月-圣遗物
 * @FilePath: \yuanshen-utils\src\config\Area\LiYue\relics.js
 */
import Area from './index'
import { addInstanceId, addRelicsId } from '@/utils/Area/relics'
import { Totree } from '@/utils/toTree'

const instanceList = [
  {
    label: '孤云凌霄之处'
  },
  {
    label: '无妄引咎密宫',
  },
  {
    label: '华池岩岫',
  },
  {
    label: '岩中幽谷',
  }
]

const instance =addInstanceId(Area.AreaId,instanceList)

const relicsList = [
  {
    instanceId: instance[0].id,
    label: '悠古的磐岩'
  },
  {
    instanceId: instance[0].id,
    label: '逆飞的流星'
  },
  {
    instanceId: instance[1].id,
    label: '炽烈的炎之魔女'
  },
  {
    instanceId: instance[1].id,
    label: '渡过烈火的贤人'
  },
  {
    instanceId: instance[2].id,
    label: '染血的骑士道'
  },
  {
    instanceId: instance[2].id,
    label: '昔日宗室之仪'
  },
  {
    instanceId: instance[3].id,
    label: '辰砂往生录'
  },
  {
    instanceId: instance[3].id,
    label: '来歆余响'
  },
]

export const relics = addRelicsId(relicsList)

export const instanceData = Totree([...instance, ...relics], Area.AreaId, 'id', 'instanceId')
