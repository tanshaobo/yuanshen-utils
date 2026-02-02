/*
 * @Author: tanshaobo
 * @Date: 2025-07-26 01:37:02
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-08-21 01:21:16
 * @Description: 区域圣遗物下公共函数
 * @FilePath: \yuanshen-utils\src\utils\Area\relics.js
 */

/**
 * name: createInstanceId
 * desc: 增加副本id
 * @param {string} id 区域id
 * @param {array} list 副本列表
 * @return {array} 副本列表
 */

export const addInstanceId = (id, list) => {
  return list.map((i,j) => ({
    instanceId: `${id}`,
    ...i,
    id: `${id}-${j+1}`
  }))
}

/**
 * name: addRelicsId
 * desc: 增加圣遗物id
 * @param {array} list 圣遗物列表
 * @return {array} 圣遗物列表
 */

export const addRelicsId = (list) => {
  return list.map((i,j) => ({ 
    ...i,
    id: `${i.instanceId}-${j+1}`
  }))
}