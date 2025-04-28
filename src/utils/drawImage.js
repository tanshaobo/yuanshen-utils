/*
 * @Author: tanshaobo
 * @Date: 2022-09-23 23:37:32
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-04-27 23:08:29
 * @Description: canvas 绘制图片并返回base64字符串
 * @FilePath: \yuanshen-utils\src\utils\drawImage.js
 */

const drawImage = (src) => {
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.src = src
    let canvas = document.createElement('canvas')
    let ctx = canvas.getContext('2d')
    img.onload = () => {
      let h = img.naturalHeight
      let w = img.naturalWidth
      canvas.width = w
      canvas.height = h
      ctx.drawImage(img, 0, 0, w, h)
      let Base64url = canvas.toDataURL('image/jpeg', 1)
      resolve(Base64url)
      img = null
      canvas = null
    }
  })
}

export default drawImage
