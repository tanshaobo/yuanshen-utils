<template>
  <el-row :gutter="20">
    <el-col :span="3" v-for="item in weekData" :key="item.id">
      <div
        class="grid-content"
        :class="item.id === activeIndex ? 'active' : ''"
        @click="changeWeek(item.id)"
      >
        {{ item.label }}
      </div>
    </el-col>
  </el-row>
  <Grid :data-list="currentRoleList" class="grid" hasHeader>
    <template #headers="slotProps">
      {{ slotProps.item.areaName }} {{ slotProps.item.label }}</template
    >
    <template #default="slotProps">
      <div v-for="i in slotProps.item.role" :key="i.id">
        {{ i.Name }}
      </div>
    </template>
  </Grid>
</template>

<script setup>
import { toRefs, reactive } from 'vue'
import area from '@/config/area'
import roles from '@/config/role'
import { weekType, talentMaterial } from '@/config/roleTalent'
import deepCopyObject from '@/utils/deepCopyObject'
import Grid from '@/components/layout/Grid/index.vue'

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
  activeIndex: 0,
  currentRoleList: []
})
const getWeek = () => {
  state.activeIndex = new Date().getDay()
}
const getCurrentRoleList = () => {
  let currentTalent = []
  let currentWeekType = Object.entries(weekType).reduce((i, j) => {
    if (j[1].includes(state.activeIndex)) {
      i.push(j[0])
    }
    return i
  }, [])
  if (currentWeekType.length == 1) {
    currentTalent = talentMaterial.filter((i) => i.weekType == Number(currentWeekType[0]))
  } else {
    currentTalent = deepCopyObject(talentMaterial)
  }
  state.currentRoleList = currentTalent.map((item) => {
    item.areaName = area.find((i) => i.AreaId == item.areaId).AreaName
    item.role = roles.filter((i) => i.Talent == item.id || Array.isArray(i.Talent))
    return item
  })
}
const changeWeek = (id) => {
  state.activeIndex = id
  getCurrentRoleList()
}
getWeek()
getCurrentRoleList()
const { activeIndex, currentRoleList } = toRefs(state)
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
