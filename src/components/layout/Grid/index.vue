<template>
  <section class="container" ref="box">
    <div class="card-box" v-if="showType == 'card'">
      <el-row v-for="(item, index) in showList" :key="index">
        <div class="column-item" v-for="(i, j) in item" :key="j">
          <el-card v-if="!i.remain">
            <slot :item="i" name="default"></slot>
          </el-card>
          <slot :item="i" name="main"></slot>
        </div>
      </el-row>
    </div>
    <div class="card-box" v-if="showType == 'table'"></div>
  </section>
</template>
<script setup>
import { onMounted, onUnmounted, reactive, toRefs, ref, watch, nextTick } from 'vue'
import handleSourceData from './Hooks/handleSourceData'

const props = defineProps({
  showType: {
    type: String,
    default: 'card'
  },
  dataList: {
    type: Array,
    default: () => []
  }
})
const state = reactive({
  column: 0,
  dataList: [],
  showList: []
})
const box = ref()
const computedLayout = () => {
  state.column = Math.floor(box.value.clientWidth / 260)
  state.showList = handleSourceData(state.dataList, state.column, { remain: true })
}
watch(
  () => props.dataList,
  (prev) => {
    state.dataList = JSON.parse(JSON.stringify(prev))
    if (prev) {
      nextTick(() => {
        computedLayout()
      })
    }
  },
  { deep: true, immediate: true }
)
window.addEventListener('resize', computedLayout)
onMounted(() => {
  computedLayout()
})
onUnmounted(() => {
  window.removeEventListener('resize', computedLayout)
})
const { showType } = toRefs(props)
const { column, dataList, showList } = toRefs(state)
</script>
<style lang="stylus" scoped>
.container
  display flex
  flex-wrap wrap
  .card-box
    width 100%
    .el-row
      width 100%
      justify-content space-between
      .column-item
        width 240px
        margin-bottom 20px
      .el-card
        cursor pointer
</style>
