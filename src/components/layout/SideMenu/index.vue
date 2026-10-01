<template>
  <el-menu
    :default-active="activeRoute"
    :default-openeds="expandedActiveKey"
    router
    :unique-opened="true"
    :collapse="collapse"
  >
    <menuTree :menu="menuOptions" />
  </el-menu>
</template>
<script setup>
import { onMounted, reactive, toRefs, watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import menuTree from './components/MenuTree.vue'

const route = useRoute()
const router = useRouter()

const props = defineProps({
  collapse: {
    type: Boolean,
    default: false
  }
})

const state = reactive({
  activeRoute: '',
  expandedActiveKey: [],
  menuOptions: [],
  menuItemPaths: []
})

const extractLeafPaths = (menus, result = []) => {
  for (const item of menus) {
    if (item.children && item.children.length) {
      extractLeafPaths(item.children, result)
    } else {
      result.push(item.path)
    }
  }
  return result
}

watch(
  route,
  (newVal) => {
    const { matched } = newVal
    const leafPaths = state.menuItemPaths

    let active = newVal.path || ''
    if (leafPaths.length && !leafPaths.includes(active)) {
      for (let i = matched.length - 2; i >= 0; i--) {
        if (leafPaths.includes(matched[i].path)) {
          active = matched[i].path
          break
        }
      }
    }
    state.activeRoute = active

    const parents = matched.filter((_, i) => i < matched.length - 1)
    state.expandedActiveKey = parents.map((p) => p.path)
  },
  { immediate: true }
)

const getMenus = (data) => {
  const loop = (data) => {
    return data.reduce((iter, item) => {
      if (item.menu) {
        if (item.showChildren) {
          iter.push({
            label: item.label,
            key: item.path,
            path: item.path,
            children: loop(item.children)
          })
        } else {
          iter.push({
            label: item.label,
            key: item.path,
            path: item.path
          })
        }
      }
      return iter
    }, [])
  }
  return loop(data)
}

onMounted(() => {
  state.menuOptions = getMenus(router.options.routes.filter((item) => item.menu))
  state.menuItemPaths = extractLeafPaths(state.menuOptions)
})
const { activeRoute, expandedActiveKey, collapse, menuOptions } = toRefs(state)
</script>
<style lang="stylus" scoped></style>
