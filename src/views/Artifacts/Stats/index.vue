<!--
 * @Author: tanshaobo
 * @Date: 2025-06-06 02:43:22
 * @LastEditors: tanshaobo
 * @LastEditTime: 2026-01-12 01:33:28
 * @Description: 词条
 * @FilePath: \yuanshen-utils\src\views\Artifacts\Stats\index.vue
-->

<template>
  <el-form :model="form" inline>
    <el-form-item>
      <el-select v-model="form.relics" clearable placeholder="所属套装" filterable>
        <el-option v-for="item in relicsList" :label="item.label" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-checkbox v-model="form.checkedRelics" label="打开套装筛选" />
    </el-form-item>
    <el-form-item>
      <el-select v-model="form.parts" clearable placeholder="位置" filterable>
        <el-option v-for="item in partsList" :label="item.label" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-select v-model="form.mainStats" clearable placeholder="主属性" filterable>
        <el-option v-for="item in baseStats" :label="item.desc" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item style="width: 232px">
      <el-select
        v-model="form.deputyStats"
        clearable
        placeholder="副属性"
        filterable
        multiple
        collapse-tags
        collapse-tags-tooltip
        :multiple-limit="4"
      >
        <el-option v-for="item in baseStats" :label="item.desc" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button @click="getcheck">查询</el-button>
    </el-form-item>
  </el-form>
  <Grid :data-list="currentRoleList" class="grid" hasHeader>
    <template #headers="slotProps">
      {{ slotProps.item.Name }}
    </template>
    <template #default="slotProps">
      <div class="role-card">
        <img :src="slotProps.item.headerURL ? slotProps.item.headerURL : slotProps.item.header" />
        <span>符合程度: {{ slotProps.item.relevance }}</span>
      </div>
    </template>
  </Grid>
</template>

<script setup>
import { reactive, toRefs } from 'vue'
import Grid from '@/components/layout/Grid/index.vue'

import { baseStats } from '@/config/stats'
import { partsList, relicsList } from '@/config/relics'
import roleList from '@/config/Role/index'
import deepCopyObject from '@/utils/deepCopyObject'
import { intersect } from '@/utils/ArrayExpand'
import fs from 'vite-plugin-fs/browser'

const state = reactive({
  baseStatList: baseStats,
  checkStats: [],
  currentRoleList: [],
  relicsList,
  partsList
})

console.log(roleList, 'roleList')
const f = async () => {
  const file = await fs.writeFile('./src/a.js', `export const a = {a: 'abc'}; export default a`)
  console.log(file, 'file')
}

const form = reactive({
  relics: '',
  checkedRelics: false,
  parts: '',
  mainStats: null,
  deputyStats: null
})

const getcheck = () => {
  console.log(form, 'form')
  // 判断是否选择部位
  if (!form.parts) {
    return
  }
  let currentStats = [form.mainStats, ...form.deputyStats].sort((a, b) => a - b)

  let roleArr = roleList.filter((item) => Object.hasOwn(item, 'stats'))

  // 是否开启套装筛选
  if (form.checkedRelics) {
    roleArr = roleArr.filter((i) => i.stats.relics.includes(form.relics))
  }

  roleArr = roleArr
    .map((i) => {
      let suitList = i.stats[form.parts].sort((a, b) => a - b)
      let result = ((intersect(currentStats, suitList).length / suitList.length) * 100).toFixed(2)
      return {
        ...i,
        relevance: result
      }
    })
    .sort((a, b) => b.result - a.result)

  state.currentRoleList = roleArr
  return
}

const { baseStatList, checkedRelics, checkStats, currentRoleList } = toRefs(state)
</script>

<style lang="stylus" scoped>
.grid
:deep(.el-card__body)
  display flex
  flex-wrap wrap
  justify-content center
  .role-card
    display flex
    flex-direction column
    justify-content center
    align-items center
    border 1px solid transparent
    border-radius 0px
    transition all .3s
    overflow hidden
    border-radius 4px
    img
      width 100%
      background-image linear-gradient(135deg, rgb(0,0,0) -60.4%, rgb(255,255,255) 145.2%)
    &:hover
      border-color rgb(5, 222, 250)
      border-radius 6px
      background-image linear-gradient(135deg, rgb(0,0,0) -0.4%, rgb(255,255,255) 145.2%)
      img
        background-image linear-gradient(135deg, rgb(0,0,0) -0.4%, rgb(255,255,255) 145.2%)
      span
        color #fff
</style>
