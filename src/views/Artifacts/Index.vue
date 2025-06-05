<!--
 * @Author: tanshaobo
 * @Date: 2025-06-04 02:36:42
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-06-06 02:55:03
 * @Description: 圣遗物
 * @FilePath: \yuanshen-utils\src\views\Artifacts\Index.vue
-->

<template>
  <el-row>
    <el-button @click="swtich('domain')">副本</el-button>
    <el-button @click="swtich('stats')">词条</el-button>
  </el-row>
  <Domain v-if="activeSwitch" />
  <Stats v-else />
</template>

<script setup>
import { reactive, toRefs } from 'vue'
import Domain from './Domain/index.vue'
import Stats from './Stats/index.vue'

const state = reactive({
  activeSwitch: true
})

const swtich = (current) => {
  state.activeSwitch = current == 'domain'
}

const { activeSwitch } = toRefs(state)
</script>
