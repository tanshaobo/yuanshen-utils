/*
 * @Author: tanshaobo
 * @Date: 2022-02-23 17:55:31
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-02-25 10:49:10
 * @Description: 删除对象中的键值对并返回结果
 * @FilePath: \yuanshen-utils\src\utils\deleteObjectKeys.js
 */
import deepCopyObject from './deepCopyObject'

const deleteObjectKeys = (o, k) => {
  if (Object.prototype.toString.call(o) != '[object Object]') {
    return
  }
  o = deepCopyObject(o)
  if (!Array.isArray(k)) {
    delete o[k]
  } else {
    k.forEach((i) => {
      delete o[i]
    })
  }

  return o
}

export default deleteObjectKeys
