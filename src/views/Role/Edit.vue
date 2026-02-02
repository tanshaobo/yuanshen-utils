<template>
  <el-form :model="form" inline :rules="formRule" ref="ruleFormRef">
    <el-row>
      <el-col :span="6">
        <el-form-item prop="name">
          <el-input v-model="form.name" placeholder="姓名"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item prop="elemental">
          <el-select v-model="form.elemental" placeholder="元素">
            <el-option
              v-for="item in ElementalList"
              :value="item.id"
              :label="item.label"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item prop="talent">
          <el-select v-model="form.talent" placeholder="天赋材料" filterable clearable>
            <el-option
              v-for="item in talentMaterial"
              :value="item.id"
              :label="item.label"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item prop="relics">
          <el-select
            v-model="form.relics"
            placeholder="圣遗物套装"
            clearable
            filterable
            multiple
            popper-class="option"
            fit-input-width
          >
            <el-option v-for="item in relicsList" :value="item.id" :label="item.label"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item>
          <el-upload
            action="#"
            list-type="picture-card"
            :auto-upload="false"
            :limit="1"
            :on-change="
              (file) => {
                onSuccess(file, 'header')
              }
            "
          >
            <!-- <template #trigger v-if="!form.header">
              <el-icon><Plus /></el-icon>
            </template> -->
            <template #file="{ file }">
              <div>
                <img class="el-upload-list__item-thumbnail" :src="file.url || form.header" alt="" />
                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                  >
                    <el-icon><zoom-in /></el-icon>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)"
                  >
                    <el-icon><Delete /></el-icon>
                  </span>
                </span>
              </div>
            </template>
          </el-upload>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item>
          <el-upload drag>
            <img v-if="form.banner" :src="form.banner" :alt="form.name + '的横幅'" />
            <div v-else>
              <el-icon class="el-icon--upload"><UploadFilled /></el-icon>
              <div class="el-upload__text">请上传{{ form.name || '角色' }} 的横幅</div>
            </div>
          </el-upload>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item prop="flower.main">
          <el-select
            v-model="form.flower.main"
            value-key="id"
            popper-class="option"
            fit-input-width
            placeholder="生之花/主属性"
            clearable
          >
            <el-option
              v-for="item in statsList"
              :key="item.id"
              :value="item.id"
              :label="item.desc"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item prop="flower.deputy">
          <el-select
            v-model="form.flower.deputy"
            placeholder="生之花/副属性"
            multiple
            :multiple-limit="4"
            collapse-tags
            collapse-tags-tooltip
            :max-collapse-tags="4"
            popper-class="option"
            fit-input-width
          >
            <el-option
              v-for="item in statsList"
              :key="item.id"
              :value="item.id"
              :label="item.desc"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item prop="plume.main">
          <el-select
            v-model="form.plume.main"
            placeholder="死之羽/主属性"
            clearable
            popper-class="option"
            fit-input-width
          >
            <el-option
              v-for="item in statsList"
              :key="item.id"
              :value="item.id"
              :label="item.desc"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item prop="plume.deputy">
          <el-select
            v-model="form.plume.deputy"
            placeholder="死之羽/副属性"
            multiple
            :multiple-limit="4"
            collapse-tags
            collapse-tags-tooltip
            :max-collapse-tags="4"
            popper-class="option"
            fit-input-width
          >
            <el-option
              v-for="item in statsList"
              :key="item.id"
              :value="item.id"
              :label="item.desc"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item prop="sands.main">
          <el-select
            v-model="form.sands.main"
            placeholder="时之沙/主属性"
            clearable
            popper-class="option"
            fit-input-width
          >
            <el-option
              v-for="item in statsList"
              :key="item.id"
              :value="item.id"
              :label="item.desc"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item prop="sands.deputy">
          <el-select
            v-model="form.sands.deputy"
            placeholder="时之沙/副属性"
            multiple
            :multiple-limit="4"
            collapse-tags
            collapse-tags-tooltip
            :max-collapse-tags="4"
            popper-class="option"
            fit-input-width
          >
            <el-option
              v-for="item in statsList"
              :key="item.id"
              :value="item.id"
              :label="item.desc"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item prop="goblet.main">
          <el-select
            v-model="form.goblet.main"
            placeholder="空之杯/主属性"
            clearable
            popper-class="option"
            fit-input-width
          >
            <el-option
              v-for="item in statsList"
              :key="item.id"
              :value="item.id"
              :label="item.desc"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item prop="goblet.deputy">
          <el-select
            v-model="form.goblet.deputy"
            placeholder="空之杯/副属性"
            multiple
            :multiple-limit="4"
            collapse-tags
            collapse-tags-tooltip
            :max-collapse-tags="4"
            popper-class="option"
            fit-input-width
          >
            <el-option
              v-for="item in statsList"
              :key="item.id"
              :value="item.id"
              :label="item.desc"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item prop="circlet.main">
          <el-select
            v-model="form.circlet.main"
            placeholder="理之冠/主属性"
            clearable
            popper-class="option"
            fit-input-width
          >
            <el-option
              v-for="item in statsList"
              :key="item.id"
              :value="item.id"
              :label="item.desc"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item prop="circlet.deputy">
          <el-select
            v-model="form.circlet.deputy"
            placeholder="理之冠/副属性"
            multiple
            :multiple-limit="4"
            collapse-tags
            collapse-tags-tooltip
            :max-collapse-tags="4"
            popper-class="option"
            fit-input-width
          >
            <el-option
              v-for="item in statsList"
              :key="item.id"
              :value="item.id"
              :label="item.desc"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item>
      <el-button @click="Ensure(ruleFormRef)" :loading="btnLoading">确认</el-button>
      <el-button @click="Back(0)">返回</el-button>
    </el-form-item>
  </el-form>

  <el-dialog v-model="dialogVisible">
    <img w-full :src="dialogImageUrl" alt="Preview Image" />
  </el-dialog>
</template>

<script setup>
import { ref, reactive, toRefs } from 'vue'
import { ElementalList } from '@/config/Elemental'
import { baseStats } from '@/config/stats'
import { relicsList } from '@/config/relics'
import talentMaterial from '@/config/roleTalent'
import { useRoute, useRouter } from 'vue-router'
import fs from 'vite-plugin-fs/browser'
import role from '@/config/Role/index'

let roleId = 0
const init = async () => {
  const {
    params: { id }
  } = useRoute()

  if (id === '0') {
    let oldId = role.length ? parseInt(role.at(-1).id) + 1 : 1
    let newId = oldId < 10 ? `000${oldId}` : oldId < 100 ? `00${oldId}` : `0${oldId}`
    roleId = newId
    return
  }
  roleId = id
  const { name: roleName } = role.find((i) => i.id === id)
  // // fs 获取文件内容方式 需要截取字符串并通过eval函数转为语句
  // const result = await fs.readFile(`./src/config/Role/${roleName}.js`)
  // const data = eval(`(${result.slice(13).slice(0, -21)})`)
  // vite glob 获取方式 需要全匹配目录文件后才能拿到结果
  const r = await import.meta.glob(`@/config/Role/*.js`)[`../../config/Role/${roleName}.js`]()
  const data = r.default

  form.name = data.name // 姓名
  form.elemental = data.elemental // 元素
  form.talent = data.talent // 天赋材料
  form.relics = data.relics // 圣遗物套装
  form.flower.main = data.flower.main
  form.flower.deputy = data.flower.deputy
  form.plume.main = data.plume.main
  form.plume.deputy = data.plume.deputy
  form.sands.main = data.sands.main
  form.sands.deputy = data.sands.deputy
  form.goblet.main = data.goblet.main
  form.goblet.deputy = data.goblet.deputy
  form.circlet.main = data.circlet.main
  form.circlet.deputy = data.circlet.deputy
}
const state = reactive({
  btnLoading: false,
  dialogImageUrl: '',
  dialogVisible: false,
  disabled: false
})

const statsList = baseStats

const router = useRouter()
const form = reactive({
  name: '', // 姓名
  elemental: '', // 元素
  talent: '', // 天赋材料
  relics: '', // 圣遗物套装
  header: '', //
  banner: '',
  flower: {
    main: null,
    deputy: []
  },
  plume: {
    main: null,
    deputy: []
  },
  sands: {
    main: null,
    deputy: []
  },
  goblet: {
    main: null,
    deputy: []
  },
  circlet: {
    main: null,
    deputy: []
  }
})

const formRule = {
  name: [{ required: true, message: '请输入角色姓名', trigger: 'blur' }],
  elemental: [{ required: true, message: '请选择元素', trigger: 'change' }],
  talent: [{ required: true, message: '请选择天赋材料', trigger: 'change' }],
  relics: [{ required: true, message: '请选择圣遗物套装', trigger: 'change' }],
  'flower.main': [{ required: true, message: '请选择生之花/主属性', trigger: 'change' }],
  'flower.deputy': [{ required: true, message: '请选择生之花/副属性', trigger: 'change' }],
  'plume.main': [{ required: true, message: '请选择死之羽/主属性', trigger: 'change' }],
  'plume.deputy': [{ required: true, message: '请选择死之羽/副属性', trigger: 'change' }],
  'sands.main': [{ required: true, message: '请选择时之沙/主属性', trigger: 'change' }],
  'sands.deputy': [{ required: true, message: '请选择时之沙/副属性', trigger: 'change' }],
  'goblet.main': [{ required: true, message: '请选择空之杯/主属性', trigger: 'change' }],
  'goblet.deputy': [{ required: true, message: '请选择空之杯/副属性', trigger: 'change' }],
  'circlet.main': [{ required: true, message: '请选择理之冠/主属性', trigger: 'change' }],
  'circlet.deputy': [{ required: true, message: '请选择理之冠/副属性', trigger: 'change' }]
}

const ruleFormRef = ref()
init()
const onSuccess = (file, target) => {
  form[target] = file.url
}

const handleRemove = (file) => {
  console.log(file)
}

const handlePictureCardPreview = (file) => {
  dialogImageUrl.value = file.url
  dialogVisible.value = true
}

const Ensure = async (formEl) => {
  if (!formEl) {
    return
  }
  await formEl.validate((valid, fields) => {
    if (valid) {
      const data = {
        id: roleId,
        ...form
      }
      state.btnLoading = true
      const p = fs.writeFile(
        `./src/config/Role/${form.name}.js`,
        `const role = ${JSON.stringify(data)}\nexport default role`
      )
      p.then((v) => {
        state.btnLoading = false
        Back(1)
      })
    } else {
      state.btnLoading = false
    }
  })
}
const Back = (bool) => {
  router.push({
    name: 'RoleList'
  })
}

const { btnLoading, dialogImageUrl, dialogVisible, disabled } = toRefs(state)
</script>

<style lang="stylus" scoped>
.el-form-item
  width 96%
  min-width 256px
</style>

<style>
.option li {
  display: inline-block;
  min-width: 128px;
  width: 50%;
}
</style>
