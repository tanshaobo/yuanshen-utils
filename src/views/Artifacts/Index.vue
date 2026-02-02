<!--
 * @Author: tanshaobo
 * @Date: 2025-06-04 02:36:42
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-12-25 23:08:53
 * @Description: 圣遗物
 * @FilePath: \yuanshen-utils\src\views\Artifacts\Index.vue
-->

<template>
  <el-row :gutter="20">
    <el-col :span="3" v-for="item in switchList">
      <div
        class="col-content"
        :class="item.switch === current ? 'active' : ''"
        @click="swtich(item.switch)"
      >
        {{ item.label }}
      </div>
    </el-col>
  </el-row>
  <Domain v-if="activeSwitch" />
  <Stats v-else />
</template>

<script setup>
import { reactive, toRefs } from 'vue'
import Domain from './Domain/index.vue'
import Stats from './Stats/index.vue'

const state = reactive({
  activeSwitch: false,
  current: 'stats',
  switchList: [
    {
      label: '副本',
      switch: 'domain'
    },
    {
      label: '词条',
      switch: 'stats'
    }
  ]
})
const init = () => {
  state.activeSwitch = state.current == 'domain'
}
init()
const swtich = (current) => {
  state.activeSwitch = current == 'domain'
  state.current = current
}

const { activeSwitch, switchList, current } = toRefs(state)
</script>
<style lang="stylus" scoped>
.el-row
  padding-bottom 20px
  :deep(.col-content)
    display flex
    align-items center
    justify-content center
    border-radius 4px
    min-height 36px
    line-height 36px
    border 1px solid rgba(255,166,49, .8)
    cursor pointer
    background rgba(255,166,49, 0)
    transition all .3s
    &:hover
      background rgba(255,166,49, .5)
      color #ffffff
    &.active
      background rgba(255,166,49, .8)
      color #ffffff
</style>
