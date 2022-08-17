<template>
  <section class="header">
    <el-breadcrumb>
      <template v-for="(item, index) in breadcrumbList" :key="index">
        <el-breadcrumb-item
          v-if="index != breadcrumbList.length"
          :to="{
            name: item.name,
            params: item.params
          }"
          @click="goRoute(item)"
        >
          {{ item.label }}
        </el-breadcrumb-item>
        <el-breadcrumb-item v-else>
          {{ item.label }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </section>
</template>

<script setup>
import { reactive, toRefs, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const breadcrumbList = computed(() => {
  const { meta, params } = route
  let tempArr = []
  if (meta && meta.crumb) {
    tempArr = [...meta.crumb]
  }
  tempArr[tempArr.length - 1].params = params
  return [...tempArr]
})

const goRoute = (item) => {
  router.push({
    name: item.name,
    params: {
      ...item.params
    }
  })
}
</script>

<style lang="stylus" scoped>
.header
  display flex
  .el-breadcrumb
    line-height 60px
    height 60px
</style>
