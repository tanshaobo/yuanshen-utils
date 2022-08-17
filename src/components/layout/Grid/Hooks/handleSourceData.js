/*
 * @Author: tanshaobo
 * @Date: 2022-02-10 18:07:45
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-02-17 16:01:59
 * @Description: 处理原始数组 补充至列数倍数
 * @FilePath: \yuanshen-utils\src\components\layout\Grid\Hooks\handleSourceData.js
 */
import ArrayToTwo from '@/utils/ArrayToTwo'

const handleSourceData = (dataList, column, fillData) => {
  let remain = column - (dataList.length % column)
  if (remain == column) {
    remain = 0
  }
  dataList.length += remain
  dataList.fill(fillData, dataList.length - remain, dataList.length)
  return ArrayToTwo(dataList, column)
}

export default handleSourceData
