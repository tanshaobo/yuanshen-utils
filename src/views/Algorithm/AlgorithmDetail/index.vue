<template>
  <el-container>
    <el-aside>
      <Row type="between" :label="dataHeader" :values="currentOptions" />
    </el-aside>
    <el-main>
      <el-button @click="reDraw">重绘</el-button>
      <component :key="readom" :is="current"></component>
    </el-main>
  </el-container>
</template>
<script setup>
import { reactive, toRefs, computed, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
import { data, dictionary } from '@/config/algorithm'
import Row from '@/components/layout/Row/index.vue'
import deleteObjectKeys from '@/utils/deleteObjectKeys'

const files = import.meta.glob('/src/components/algorithm/*/index.vue')
const route = useRoute()
const dataHeader = deleteObjectKeys(dictionary)
const {
  params: { id }
} = route

const state = reactive({
  currentOptions: {},
  readom: 0.5
})
const Init = () => {
  state.currentOptions = data.find((item) => item.id == id)
}
const current = computed(() => {
  const { name } = state.currentOptions
  return defineAsyncComponent(files[`/src/components/algorithm/${name}/index.vue`])
})
Init()

const reDraw = () => {
  state.readom = Math.random()
}
const { currentOptions, readom } = toRefs(state)
</script>
<style lang="stylus" scoped>
.el-container
  width 100% !important
  .el-aside
    padding 15px
    margin-right 10px
    box-shadow 2px 2px 8px 2px rgba(128,0,128, .2)
  .el-main
    display flex
    flex-direction column
    flex unset
    .el-button
      margin-bottom 10px
</style>
