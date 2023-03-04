/*
 * @Author: tanshaobo
 * @Date: 2023-03-04 09:17:28
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-03-04 09:18:21
 * @Description: file content
 * @FilePath: \yuanshen-utils\src\utils\indexDB\getDataByKey.js
 */
/**
 * 通过主键读取数据
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {string} key 主键值
 */
const getDataByKey = (db, storeName, key) => {
  return new Promise((resolve, reject) => {
    var transaction = db.transaction([storeName]); // 事务
    var objectStore = transaction.objectStore(storeName); // 仓库对象
    var request = objectStore.get(key); // 通过主键获取数据

    request.onerror = function (event) {
      console.log("事务失败");
    };

    request.onsuccess = function (event) {
      console.log("主键查询结果: ", request.result);
      resolve(request.result);
    };
  });
}

export default getDataByKey
