/*
 * @Author: tanshaobo
 * @Date: 2022-02-10 18:06:20
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-02-17 15:43:31
 * @Description: 生成二维数组
 * @FilePath: \yuanshen-utils\src\utils\ArrayToTwo.js
 */

const ArrayToTwo = (arr, num) => {
  let result = new Array(Math.ceil(arr.length / num))
  result.fill(null, 0, result.length)
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(result[Math.floor(i / num)])) {
      result[Math.floor(i / num)].push(arr[i])
    } else {
      result[Math.floor(i / num)] = [arr[i]]
    }
  }
  return result
}

export default ArrayToTwo
