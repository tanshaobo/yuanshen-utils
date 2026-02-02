
/**
 * @description 计算数组交集
 * @param {Array} arr1 
 * @param {Array} arr2 
 * @returns 
 */
export const intersect = (arr1, arr2, id) => {
  if(!Array.isArray(arr1) || (!Array.isArray(arr2))){
    return '存在非数组'
  }
  
  let result 
  if(id){
    result = arr1.reduce((r, i) => {
      let tempR = arr2.find(j =>j.id === i.id)
      if(tempR){
        r.push(tempR)
      }
    }, [])
  }else{
    result = arr1.filter(i => arr2.includes(i))
  }
  
  return result

}
