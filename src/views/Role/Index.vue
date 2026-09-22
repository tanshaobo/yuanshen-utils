<template>
  <el-form :model="form" inline>
    <el-form-item>
      <el-select v-model="form.attr" placeholder="属性" filterable>
        <el-option v-for="item in attrList" :label="item.label" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button @click="Search">查询</el-button>
      <el-button @click="Add">新增</el-button>
    </el-form-item>
  </el-form>
  <Grid :data-list="currentRoleList" class="grid">
    <template #default="slotProps">
      <div @click="Detail(slotProps.item)">
        <el-row justify="space-between">
          <el-col :span="12">
            {{ slotProps.item.name }}
          </el-col>
          <el-col :span="10">
            <el-button link @click.stop="Edit(slotProps.item)">修改</el-button>
            <el-button link @click.stop="Delete(slotProps.item)">删除</el-button>
          </el-col>
        </el-row>
        <el-row class="role-card">
          <img :src="slotProps.item.headerURL ? slotProps.item.headerURL : slotProps.item.header" />
        </el-row>
      </div>
    </template>
  </Grid>
</template>

<script setup>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import roleList from '@/config/Role/index'
import Grid from '@/components/layout/Grid/index.vue'

const form = reactive({
  attr: 0,
  area: []
})

const state = reactive({
  currentRoleList: [],
  attrList: []
})

state.currentRoleList = roleList

const router = useRouter()
const Search = () => {}
const Add = () => {
  router.push({
    name: 'RoleEdit',
    params: {
      id: 0
    }
  })
}
const Edit = (item) => {
  router.push({
    name: 'RoleEdit',
    params: {
      id: item.id
    },
    state: item
  })
}
const Delete = (item) => {
  console.log('Delete:', item)
}
const Detail = (item) => {
  router.push({
    name: 'RoleDetail',
    params: {
      id: item.id
    }
  })
}

const { currentRoleList, attrList } = toRefs(state)
</script>

<style lang="stylus" scoped></style>
