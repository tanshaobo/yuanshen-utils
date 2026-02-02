/*
 * @Author: tanshaobo
 * @Date: 2025-07-08 02:52:51
 * @LastEditors: tanshaobo
 * @LastEditTime: 2026-01-25 23:57:50
 * @Description: 诺德卡莱-圣遗物
 * @FilePath: \yuanshen-utils\src\config\Area\NuoDeKaLai\relics.js
 */
import Area from './index'
import { addInstanceId, addRelicsId } from '@/utils/Area/relics'
import { Totree } from '@/utils/toTree'

const instanceList = [
  {
    label: '霜凝的机枢'
  },
  {
    label: '月童的库藏',
  }
]

const instance =addInstanceId(Area.AreaId,instanceList)

const relicsList = [
  {
    instanceId: instance[0].id,
    label: '穹境示现之夜'
  },
  {
    instanceId: instance[0].id,
    label: '纺月的夜歌'
  },
  {
    instanceId: instance[1].id,
    label: '晨星与月的晓歌'
  },
  {
    instanceId: instance[1].id,
    label: '风起之日'
  }
]


export const relics = addRelicsId(relicsList)

export const instanceData = Totree([...instance, ...relics], Area.AreaId, 'id', 'instanceId')
