<template>
  <canvas id="canvas" width="500" height="500" ref="canvas"></canvas>
</template>
<script setup>
import { ref, nextTick } from 'vue'
import Rect from '../hooks/Rect'
import setNums from '../hooks/setNums'
import setAngle from '../hooks/setAngle'
import creatCtx from '../hooks/creatCtx'
// 获取数组
const nums = setNums()

const canvas = ref(null)

// 获取角度数组
const CosandSin = setAngle()

nextTick(() => {
  const ctx = creatCtx(canvas.value)
  const drawAll = (arr) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        ctx.clearRect(-250, -250, 500, 500) // 清空画布
        const rects = [] // 用来存储720个长方形
        for (let i = 0; i < arr.length; i++) {
          const num = arr[i]
          const { cos, sin } = CosandSin[Math.floor(i / 2)] // 一个角画两个
          const x = num * cos // x = ρ * cosθ
          const y = num * sin // y = ρ * sinθ
          rects.push(new Rect(ctx, x, y, 5, 3)) // 收集所有长方形
        }
        rects.forEach((rect) => rect.draw()) // 遍历渲染
        resolve('draw success')
      }, 100)
    })
  }
  drawAll(nums)

  const sort = async (arr, maxDigit) => {
    let mod = 10
    let dev = 1
    let counter = []
    for (let i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
      for (let j = 0; j < arr.length; j++) {
        let bucket = parseInt((arr[j] % mod) / dev, 10)
        if (counter[bucket] == null) {
          counter[bucket] = []
        }
        counter[bucket].push(arr[j])
      }
      let pos = 0
      for (let j = 0; j < counter.length; j++) {
        let value = null
        if (counter[j] != null) {
          while ((value = counter[j].shift()) != null) {
            arr[pos++] = value
          }
          // eslint-disable-next-line no-await-in-loop
          await drawAll(arr) // 一边排序一边重新画
        }
      }
    }
    return arr
  }
  sort(nums, 3)
})
</script>
<style lang="stylus" scoped>
#canvas
  background #000
</style>
