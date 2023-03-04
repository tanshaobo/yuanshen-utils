/*
 * @Author: tanshaobo
 * @Date: 2023-03-03 20:06:48
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-03-04 16:30:17
 * @Description: file content
 * @FilePath: \yuanshen-utils\src\utils\indexDB\openDB.js
 */
/**
 * 打开数据库
 * @param {object} dbName 数据库的名字
 * @param {string} storeName 仓库名称
 * @param {string} version 数据库的版本
 * @return {object} 该函数会返回一个数据库实例
 */
const openDB = (dbName, storeName, version = 1) => {
  return new Promise((resolve, reject) => {
    //  兼容浏览器
    var indexedDB =
      window.indexedDB ||
      window.mozIndexedDB ||
      window.webkitIndexedDB ||
      window.msIndexedDB;
    let db;
    // 打开数据库，若没有则会创建
    const request = indexedDB.open(dbName, version);
    // 数据库打开成功回调
    request.onsuccess = function (event) {
      db = event.target.result; // 数据库对象
      resolve(db);
    };
    // 数据库打开失败的回调
    request.onerror = function (event) {
    };
    // 数据库有更新时候的回调
    request.onupgradeneeded = function (event) {
      // 数据库创建或升级的时候会触发
      db = event.target.result; // 数据库对象
      var objectStore;
      // 创建存储库
      objectStore = db.createObjectStore(storeName, {
        keyPath: "id", // 这是主键
        autoIncrement: true // 实现自增
      });
      // 创建索引，在后面查询数据的时候可以根据索引查
      objectStore.createIndex("id", "id", { unique: true });
    };
  });
}

export default openDB
