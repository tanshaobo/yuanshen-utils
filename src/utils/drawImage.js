/*
 * @Author: tanshaobo
 * @Date: 2022-09-23 23:37:32
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-03-04 14:13:49
 * @Description: canvas 绘制图片并返回base64字符串
 * @FilePath: \yuanshen-utils\src\utils\drawImage.js
 */

const drawImage = (src) => {
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.src = src
    img.onload = () => {
      let w = img.naturalWidth
      let h = img.naturalHeight
      let canvas = document.createElement('canvas')
      canvas.width = w
      canvas.height = h
      let ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0, w, h)
      let Base64url = canvas.toDataURL('image/jpeg', 1)
      resolve(Base64url)
      img = null
      canvas = null
    }
  })
}

export default drawImage
