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
import { onMounted, reactive, toRefs, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import menuTree from './components/MenuTree.vue'
// 用来获取 路由信息
const route = useRoute()
// 用来跳转 路由
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
  menuOptions: []
})

watch(
  route,
  (newVal, oldVal) => {
    const { matched } = newVal
    state.expandedActiveKey = matched
      .filter((item, index) => index < matched.length - 1 && index < 2)
      .map((item) => item.meta.subMenu)
    state.activeRoute =
      matched.length > 3
        ? matched[matched.length - 2].meta.submenu
        : matched[matched.length - 1].meta.submenu
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
})
const { activeRoute, expandedActiveKey, collapse, menuOptions } = toRefs(state)
</script>
<style lang="stylus" scoped></style>
