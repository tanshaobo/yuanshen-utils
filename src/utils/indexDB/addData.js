/*
 * @Author: tanshaobo
 * @Date: 2023-03-04 09:10:34
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-03-04 09:14:03
 * @Description: file content
 * @FilePath: \yuanshen-utils\src\utils\indexDB\addData.js
 */
const addData = (db, storeName, data) => {
  return new Promise((resolve,reject)=>{
    var request = db
    .transaction([storeName], "readwrite") // 事务对象 指定表格名称和操作模式（"只读"或"读写"）
    .objectStore(storeName) // 仓库对象
    .add(data);

    request.onsuccess = function (event) {
      resolve('success')
    };

    request.onerror = function (event) {
      reject('error')
    };
  })
}

export default addData
