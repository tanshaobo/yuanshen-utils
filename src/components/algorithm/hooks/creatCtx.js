/*
 * @Author: tanshaobo
 * @Date: 2022-03-01 17:06:51
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-03-01 17:08:24
 * @Description: 创建画布对象
 * @FilePath: \yuanshen-utils\src\components\algorithm\hooks\creatCtx.js
 */

const creatCtx = (canvas) => {
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = 'white'
  ctx.translate(250, 250)
  return ctx
}

export default creatCtx
