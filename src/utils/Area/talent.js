/*
 * @Author: tanshaobo
 * @Date: 2025-07-11 01:35:53
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-07-11 01:39:07
 * @Description: 区域下天赋公共函数
 * @FilePath: \yuanshen-utils\src\utils\Area\talent.js
 */

export const createId = (id, list) => {
  return list.map((i,j) => ({
    ...i,
    id: (Number(id) - 1) * 3 + j + 1,
    areaId: id
  }))
}