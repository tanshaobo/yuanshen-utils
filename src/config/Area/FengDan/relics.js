/*
 * @Author: tanshaobo
 * @Date: 2025-07-08 02:50:43
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-08-21 01:29:23
 * @Description: 枫丹-圣遗物
 * @FilePath: \yuanshen-utils\src\config\Area\FengDan\relics.js
 */
import Area from './index'
import { addInstanceId, addRelicsId } from '@/utils/Area/relics'
import { Totree } from '@/utils/toTree'

const instanceList = [
  {
    label: '罪祸的终末'
  },
  {
    label: '临瀑之城',
  },
  {
    label: '褪色的剧场',
  }
]

const instance =addInstanceId(Area.AreaId,instanceList)

const relicsList = [
  {
    instanceId: instance[0].id,
    label: '逐影猎人'
  },
  {
    instanceId: instance[0].id,
    label: '黄金剧团'
  },
  {
    instanceId: instance[1].id,
    label: '回声之林夜话'
  },
  {
    instanceId: instance[1].id,
    label: '昔时之歌'
  },
  {
    instanceId: instance[2].id,
    label: '谐律异想的断章'
  },
  {
    instanceId: instance[2].id,
    label: '未竟的遐思'
  }
]

export const relics = addRelicsId(relicsList)

export const instanceData = Totree([...instance, ...relics], Area.AreaId, 'id', 'instanceId')
