/*
 * @Author: tanshaobo
 * @Date: 2025-07-11 01:35:53
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-07-26 01:32:16
 * @Description: 区域下天赋公共函数
 * @FilePath: \yuanshen-utils\src\utils\Area\talent.js
 */

/**
 * name: createTalentId
 * desc: 创建天赋id
 * @param {string} id 区域id
 * @param {array} list 天赋列表
 * @return {array} 天赋列表
*/

export const createTalentId = (id, list) => {
  return list.map((i,j) => ({
    ...i,
    id: (Number(id) - 1) * 3 + j + 1,
    areaId: id
  }))
}

