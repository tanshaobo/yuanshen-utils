/*
 * @Author: tanshaobo
 * @Date: 2025-09-28 14:43:29
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-09-28 16:31:18
 * @Description: 数学统计 An Cn
 * @FilePath: \yuanshen-utils\src\utils\permutation.js
 */
const arr = [1,2,3,4]

import deepCopyObject from '@/utils/deepCopyObject'
/**
 * 
 * @param {Array} arr 当前数据集 
 * @param {Number} cur 子集长度
 */

const permutation = (arr, cur, isAn = true) => {
  // 首先取出只有一项
  let onceList = arr.map(i=> [i])
  if(cur === 1){
    return onceList
  }

  let result = []

  for(let i = 0, l = onceList.length; i < l;i++){
    let current = onceList[i]
    let children = []
    const tempArr = isAn ? arr.filter(item => item !== current[0]) : arr.slice(i + 1)
    children = permutation(tempArr, cur - 1, isAn)
    for (let child of children) {
      result.push([...current, ...child]);
    }
  }
  return result
}

const An = (arr, cur) => permutation(arr, cur, true)
const Cn = (arr, cur) => permutation(arr, cur, false)

// example
console.log('An', An(arr, 2))
console.log('Cn',Cn(arr, 3))
export {
  An,
  Cn
}