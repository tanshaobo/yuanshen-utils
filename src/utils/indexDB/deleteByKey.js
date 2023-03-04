/*
 * @Author: tanshaobo
 * @Date: 2023-03-04 10:40:25
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-03-04 10:42:19
 * @Description: file content
 * @FilePath: \yuanshen-utils\src\utils\indexDB\deleteByKey.js
 */
/**
 * 通过主键删除数据
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {object} id 主键值
 */
const deleteByKey = (db, storeName, id) => {
  return new Promise((resolve,reject) => {
    var request = db
    .transaction([storeName], "readwrite")
    .objectStore(storeName)
    .delete(id);

    request.onsuccess = function () {
      console.log("数据删除成功");
      resolve('删除成功')
    };

    request.onerror = function () {
      console.log("数据删除失败");
      reject('删除失败')
    };
  })
}

export default deleteByKey
