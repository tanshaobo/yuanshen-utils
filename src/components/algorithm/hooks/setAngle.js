/*
 * @Author: tanshaobo
 * @Date: 2022-03-01 17:02:03
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-03-01 17:03:21
 * @Description: 生成角度
 * @FilePath: \yuanshen-utils\src\components\algorithm\hooks\setAngle.js
 */

const setAngle = () => {
  const CosandSin = []
  for (let i = 0; i < 360; i++) {
    const jiaodu = (i / 180) * Math.PI
    CosandSin.push({ cos: Math.cos(jiaodu), sin: Math.sin(jiaodu) })
  }
  return CosandSin
}

export default setAngle
