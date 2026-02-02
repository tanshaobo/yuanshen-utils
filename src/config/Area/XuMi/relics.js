/*
 * @Author: tanshaobo
 * @Date: 2025-07-08 02:47:07
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-08-21 01:36:03
 * @Description: 须弥-圣遗物
 * @FilePath: \yuanshen-utils\src\config\Area\XuMi\relics.js
 */
import Area from './index'
import { addInstanceId, addRelicsId } from '@/utils/Area/relics'
import { Totree } from '@/utils/toTree'

const instanceList = [
  {
    label: '缘觉塔'
  },
  {
    label: '赤金的城墟',
  },
  {
    label: '熔铁的孤塞',
  }
]

const instance =addInstanceId(Area.AreaId,instanceList)

const relicsList = [
{
  instanceId: instance[0].id,
  label: '林深的记忆'
},
{
  instanceId: instance[0].id,
  label: '饰金之梦'
},
{
    instanceId: instance[1].id,
    label: '乐园遗落之花'
  },
  {
    instanceId: instance[1].id,
    label: '沙上楼阁史话'
  },
  {
    instanceId: instance[2].id,
    label: '水仙之梦'
  },
  {
    instanceId: instance[2].id,
    label: '花海甘露之光'
  }
]

export const relics = addRelicsId(relicsList)

export const instanceData = Totree([...instance, ...relics], Area.AreaId, 'id', 'instanceId')
