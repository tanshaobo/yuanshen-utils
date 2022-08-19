<template>
  <el-row :gutter="20">
    <el-col :span="3" v-for="item in weekData" :key="item.id">
      <div class="grid-content" :class="item.id === activeIndex ? 'active' : ''">
        {{ item.label }}
      </div>
    </el-col>
  </el-row>
</template>

<script setup>
import { toRefs, reactive } from 'vue'

const weekData = [
  { id: 0, label: '周日' },
  { id: 1, label: '周一' },
  { id: 2, label: '周二' },
  { id: 3, label: '周三' },
  { id: 4, label: '周四' },
  { id: 5, label: '周五' },
  { id: 6, label: '周六' }
]

const state = reactive({
  activeIndex: 0
})
const getWeek = () => {
  state.activeIndex = new Date().getDay()
}

getWeek()
const { activeIndex } = toRefs(state)
</script>

<style lang="stylus">
.grid-content
  display flex
  align-items center
  justify-content center
  border-radius 4px
  min-height 36px
  line-height 36px
  border 1px solid rgba(255,166,49, .8)
  cursor pointer
  &:hover
    background rgba(255,166,49, .5)
    color #ffffff
  &.active
    background rgba(255,166,49, .8)
    color #ffffff
</style>
