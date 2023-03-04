/**
 * 更新数据
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {object} data 数据
 */
const updateData = (db, storeName, data) => {
  return new Promise((resolve, reject)=> {

    var request = db
    .transaction([storeName], "readwrite") // 事务对象
    .objectStore(storeName) // 仓库对象
    .put(data);

    request.onsuccess = function () {
      console.log("数据更新成功");
      resolve('更新成功')
    };

    request.onerror = function () {
      console.log("数据更新失败");
    };
  })
}

export default updateData
