/**
 * @Author tanshaobo
 * @Date 2022-02-17 14:46:37
 * @LastEditors tanshaobo
 * @LastEditTime 2022-02-17 14:46:39
 * @Description 深度复制对象
 * @FilePath \yuanshen-utils\src\utils\deepCopyObject.js
 * @params o 传入的数组或对象
 */

const deepCopyObject = (o) => {
  return Object.prototype.toString.call(o) == '[object Object]' ||
    Object.prototype.toString.call(o) == '[object Array]'
    ? JSON.parse(JSON.stringify(o))
    : {}
}

export default deepCopyObject
