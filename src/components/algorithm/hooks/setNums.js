/*
 * @Author: tanshaobo
 * @Date: 2022-03-01 16:53:03
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-03-01 16:57:01
 * @Description: 生成数组
 * @FilePath: \yuanshen-utils\src\components\algorithm\hooks\setNums.js
 */

const setNums = () => {
  let nums = []
  for (let i = 0; i < 4; i++) {
    // 生成一个 0 - 179的有序数组
    const arr = [...Array(180).keys()]
    const res = []
    while (arr.length) {
      // 打乱
      const randomIndex = Math.random() * arr.length - 1
      res.push(arr.splice(randomIndex, 1)[0])
    }
    nums = [...nums, ...res]
  }
  return nums
}
export default setNums
