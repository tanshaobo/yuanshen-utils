<template>
  <el-form :model="formData" inline>
    <el-form-item>
      <el-input v-model="formData.keyWord" clearable placeholder="请输入名称"></el-input>
    </el-form-item>
    <el-form-item>
      <el-select v-model="formData.isStable" clearable placeholder="是否稳定">
        <el-option
          v-for="(item, index) in stableList"
          :key="index"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-select v-model="formData.isLinear" clearable placeholder="是否线性">
        <el-option
          v-for="(item, index) in linearList"
          :key="index"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button @click="search">搜索</el-button>
    </el-form-item>
  </el-form>
  <Grid :data-list="dataList" class="grid">
    <template #default="slotProps">
      <div @click="enterDetail(slotProps.item)">
        <Row type="between" :label="dataHeader" :values="slotProps.item" />
      </div>
    </template>
  </Grid>
</template>
<script setup>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import Grid from '@/components/layout/Grid/index.vue'
import Row from '@/components/layout/Row/index.vue'
import { stableList, linearList } from '@/config/common'
import { dictionary, data } from '@/config/algorithm'
import deepCopyObject from '@/utils/deepCopyObject'
import deleteObjectKeys from '@/utils/deleteObjectKeys'

const dataHeader = deleteObjectKeys(dictionary, 'baseIdea')

const state = reactive({
  dataList: [],
  formData: {
    keyWord: '',
    isStable: '',
    isLinear: ''
  }
})

const router = useRouter()

const enterDetail = (item) => {
  router.push({
    name: 'AlgorithmDetail',
    params: {
      id: item.id
    }
  })
}

const Init = () => {
  state.dataList = deepCopyObject(data).map((i) => {
    i.stable = i.stable ? '是' : '否'
    i.linear = i.linear ? '是' : '否'
    i.remain = false
    return i
  })
}
Init()

const search = () => {
  Init()
  state.dataList = state.dataList.filter((item) => {
    if (state.formData.keyWord && !state.formData.isStable && !state.formData.isLinear) {
      return item.label.indexOf(state.formData.keyWord) > -1
    }
    if (state.formData.keyWord && state.formData.isStable == 1 && !state.formData.isLinear) {
      return item.label.indexOf(state.formData.keyWord) > -1 && item.stable
    }
    if (state.formData.keyWord && state.formData.isStable == 1 && state.formData.isLinear == 1) {
      return item.label.indexOf(state.formData.keyWord) > -1 && item.stable && item.linear
    }
    if (state.formData.keyWord && state.formData.isStable == 1 && state.formData.isLinear == 2) {
      return item.label.indexOf(state.formData.keyWord) > -1 && item.stable && !item.linear
    }
    if (state.formData.keyWord && state.formData.isStable == 2 && !state.formData.isLinear) {
      return item.label.indexOf(state.formData.keyWord) > -1 && !item.stable
    }
    if (state.formData.keyWord && state.formData.isStable == 2 && state.formData.isLinear == 1) {
      return item.label.indexOf(state.formData.keyWord) > -1 && !item.stable && item.linear
    }
    if (state.formData.keyWord && state.formData.isStable == 2 && state.formData.isLinear == 2) {
      return item.label.indexOf(state.formData.keyWord) > -1 && !item.stable && !item.linear
    }
    if (state.formData.keyWord && !state.formData.isStable && state.formData.isLinear == 1) {
      return item.label.indexOf(state.formData.keyWord) > -1 && item.linear
    }
    if (state.formData.keyWord && !state.formData.isStable && state.formData.isLinear == 2) {
      return item.label.indexOf(state.formData.keyWord) > -1 && !item.linear
    }
    if (!state.formData.keyWord && state.formData.isStable == 1 && !state.formData.isLinear) {
      return item.stable
    }
    if (!state.formData.keyWord && state.formData.isStable == 1 && state.formData.isLinear == 1) {
      return item.stable && item.linear
    }
    if (!state.formData.keyWord && state.formData.isStable == 1 && state.formData.isLinear == 2) {
      return item.stable && !item.linear
    }
    if (!state.formData.keyWord && state.formData.isStable == 2 && !state.formData.isLinear) {
      return !item.stable
    }
    if (!state.formData.keyWord && state.formData.isStable == 2 && state.formData.isLinear == 1) {
      return !item.stable && item.linear
    }
    if (!state.formData.keyWord && state.formData.isStable == 2 && state.formData.isLinear == 2) {
      return !item.stable && !item.linear
    }
    if (!state.formData.keyWord && !state.formData.isStable && state.formData.isLinear == 1) {
      return item.linear
    }
    if (!state.formData.keyWord && !state.formData.isStable && state.formData.isLinear == 2) {
      return !item.linear
    }
    return item
  })
}

const { dataList, formData } = toRefs(state)
</script>
