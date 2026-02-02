<!--
 * @Author: tanshaobo
 * @Date: 2025-06-06 02:19:21
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-08-21 01:57:10
 * @Description: 圣遗物-副本
 * @FilePath: \yuanshen-utils\src\views\Artifacts\Domain\index.vue
-->
<template>
  <Grid :data-list="Instance" class="grid" hasHeader>
    <template #headers="slotProps">
      {{ slotProps.item.label }}
    </template>
    <template #default="slotProps">
      <div v-for="i in slotProps.item.children" :key="i.id" class="role-card">
        <span>{{ i.label }}</span>
      </div>
    </template>
  </Grid>
</template>

<script setup>
import { ref, reactive, toRefs } from 'vue'
import Grid from '@/components/layout/Grid/index.vue'

import { Instance } from '@/config/relics'

console.log('Instance', Instance)

const state = reactive({
  domainList: []
})

const { domainList } = toRefs(state)
</script>

<style scoped lang="scss"></style>
