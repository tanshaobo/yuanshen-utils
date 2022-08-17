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
      }, 10)
    })
  }
  drawAll(nums)

  const sort = async (arr) => {
    let len = arr.length
    let minIndex
    let temp
    for (let i = 0; i < len - 1; i++) {
      minIndex = i
      for (let j = i + 1; j < len; j++) {
        if (arr[j] < arr[minIndex]) {
          // 寻找最小的数
          minIndex = j // 将最小数的索引保存
        }
      }
      temp = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = temp
      // eslint-disable-next-line no-await-in-loop
      await drawAll(arr) // 一边排序一边重新画
    }
    return arr
  }
  sort(nums)
})
</script>
<style lang="stylus" scoped>
#canvas
  background #000
</style>
