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
      <div v-for="i in slotProps.item.role" :key="i.id" class="role-card">
        <img :src="i.headerURL ? i.headerURL : i.header" />
        <span>{{ i.Name }}</span>
      </div>
    </template>
  </Grid>
</template>

<script setup>
import { ref, toRefs, reactive, onMounted } from 'vue'
import Grid from '@/components/layout/Grid/index.vue'

import area from '@/config/area'
import roles from '@/config/role'
import { weekType, talentMaterial } from '@/config/roleTalent'
import { weekData } from '@/config/common'

import deepCopyObject from '@/utils/deepCopyObject'
import drawImage from '@/utils/drawImage'

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
  let headerObj = localStorage.getItem('headerObj')
  headerObj = headerObj ? JSON.parse(headerObj) : {}
  state.currentRoleList = currentTalent.map((item) => {
    item.areaName = area.find((i) => i.AreaId == item.areaId).AreaName
    item.role = roles
      .filter((i) => i.Talent == item.id || Array.isArray(i.Talent))
      .map((item) => {
        if (headerObj && headerObj[item.id]) {
          item.headerURL = headerObj[item.id]
        }
        return item
      })

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

onMounted(() => {
  let headerObj = localStorage.getItem('headerObj')
  if (headerObj) {
    headerObj = JSON.parse(headerObj)
  } else {
    headerObj = {}
  }
  roles
    .filter((item) => item.header)
    .forEach(item => {
      if (!(headerObj && Object.prototype.hasOwnProperty.call(headerObj, item.id))) {
          let p = drawImage(item.header)
          .then((url) => {
            headerObj[item.id] = url
            localStorage.setItem('headerObj', JSON.stringify(headerObj))
          })
          .catch((err) => {
            console.log(err)
          })
      }
    })
})
</script>

<style lang="stylus" scoped>
:deep(.grid-content)
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
.grid
  :deep(.el-card__body)
    display flex
    flex-wrap wrap
    justify-content space-between
    align-content space-around
    .role-card
      display flex
      flex-direction column
      width 60px
      justify-content center
      align-items center
      border 1px solid transparent
      border-radius 0px
      transition all .3s
      overflow hidden
      img
        width 100%
        background-image linear-gradient(135deg, rgb(0,0,0) -60.4%, rgb(255,255,255) 145.2%)
      span
        font-size 12px
      &:hover
        border-color rgb(5, 222, 250)
        border-radius 6px
        background-image linear-gradient(135deg, rgb(0,0,0) -0.4%, rgb(255,255,255) 145.2%)
        img
          background-image linear-gradient(135deg, rgb(0,0,0) -0.4%, rgb(255,255,255) 145.2%)
        span
          color #fff
</style>
