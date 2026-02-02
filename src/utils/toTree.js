/**
 * @Author tanshaobo
 * @Date 2025-07-26 02:08:43
 * @LastEditors tanshaobo
 * @LastEditTime 2025-07-26 02:08:43
 * @Description 将数组转换为树形结构
 * @FilePath \yuanshen-utils\src\utils\toTree.js
 */

/**
 * name: Totree
 * desc: 将数组转换为树形结构
 * @param {array} data 数据
 * @param {number} root 根节点
 * @param {string} id 主键
 * @param {string} pid 父级id
 * @return {array} 树形结构
*/
export const Totree = (data, root = 0, id = 'id', pid = 'pid') => {
  let arr = []
  data.forEach((item) => {
    if (item[pid] == root) {
      arr.push(item)
      const children = Totree(data, item[id], id, pid)
      if (children.length) {
        item.children = children
      }
    }
  })
  return arr
}

/**
 * name: Totree1 目前存在问题，暂不使用
 * desc: 将数组转换为树形结构
 * @param {array} data 数据
 * @param {string} id 主键
 * @param {string} pid 父级id
 * @return {array} 树形结构
*/
const Totree1 = (data, id = 'id', pid = 'pid') => {
  let arr = []
  const map = {}
  data.forEach((item) => {
    let newItem = (map[item[id]] = {
      ...item,
      children: []
    })
    if (map[item[pid]]) {
      map[item[pid]].children.push(newItem)
    } else {
      arr.push(newItem)
    }
  })
  return arr
}

/**
 * name: Totree2  目前存在问题，暂不使用
 * desc: 将数组转换为树形结构
 * @param {array} data 数据
 * @param {number} root 根节点
 * @param {string} id 主键
 * @param {string} pid 父级id
 * @return {array} 树形结构
*/
const Totree2 = (data, root = 0, id = 'id', pid = 'pid') => {
  const result = [] 
  getChildren(data, result, root)
  return result
}
const getChildren = (data, result, pid) => {
  data.forEach((item) => {
    if (item[pid] == pid) {
      const newItem = { ...item, children: [] }
      result.push(newItem)
      getChildren(data, newItem.children, item[id])
    }
  })
}