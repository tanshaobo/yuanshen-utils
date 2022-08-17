<template>
  <template v-for="(item, index) in menu" :key="index + item.path">
    <el-menu-item
      v-if="!item.children"
      :key="index + item.path"
      :index="item.path ? item.path : ''"
    >
      <template #title>
        {{ item.label }}
      </template>
    </el-menu-item>
    <el-sub-menu v-else :index="item.path" :key="index + item.path">
      <template #title>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <menugroup :menu="item.children"></menugroup>
      </el-menu-item-group>
    </el-sub-menu>
  </template>
</template>

<script>
export default {
  name: 'menugroup',
  props: ['menu']
}
</script>

<style lang="stylus" scoped></style>
