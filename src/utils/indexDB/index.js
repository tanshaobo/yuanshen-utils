/*
 * @Author: tanshaobo
 * @Date: 2023-03-03 20:06:48
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-03-04 16:59:21
 * @Description: file content
 * @FilePath: \yuanshen-utils\src\utils\indexDB\index.js
 */
import openDB from "./openDB";
import addData from "./addData";
import getDataByKey from "./getDataByKey";
import getDataByPage from './getDataByPage'
import updateData from "./updateDB";
import deleteByKey from "./deleteByKey";
// 添加
const add = (dbName,storeName, data) => {
  openDB(dbName,storeName).then(res => {
    if(Array.isArray(data)){
      data.forEach(item => {
        addData(res, storeName, item)
      });
    }else{
      addData(res, storeName, data)
    }
  })
}

// 关闭
const close = dbName => {
  openDB(dbName,storeName).then(res => res.close())
}

// Id查询
const searchDataById = (dbName, storeName, id) => openDB(dbName,storeName).then((res)=>getDataByKey(res, storeName, id))

// 列表查询
const searchDataByPage = (dbName, storeName, pageNum, pageSize) => openDB(dbName,storeName).then(res => getDataByPage(res, storeName, pageNum, pageSize))

// 修改
const edit = (dbName,storeName,data) => openDB(dbName,storeName).then(res => updateData(res, storeName, data))

// 删除
const deleteById = (dbName, storeName, id) => openDB(dbName,storeName).then(res => deleteByKey(res, storeName, id))

export default {
  add,
  close,
  edit,
  searchDataById,
  searchDataByPage,
  deleteById
}

