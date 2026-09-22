/*
 * @Author: tanshaobo
 * @Date: 2022-11-18 10:00:38
 * @LastEditors: tanshaobo
 * @LastEditTime: 2026-09-23 00:00:00
 * @Description: ESLint 8 + airbnb-base 15 升级，补充 Vue 3.4 编译器宏全局声明
 * @FilePath: \yuanshen-utils\.eslintrc.js
 */
module.exports = {
  globals: {
    defineEmits: true,
    defineProps: true,
    defineExpose: true,
    defineModel: true,
    defineOptions: true,
    defineSlots: true,
    useTemplateRef: true,
    useAttrs: true,
    useSlots: true,
    useEmits: true
  },
  env: {
    browser: true,
    es2022: true,
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'airbnb-base',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['@common', './src/components/common']
        ],
        extensions: ['.js', '.json']
      }
    }
  },
  rules: {
    'arrow-parens': 0,
    'arrow-spacing': 0,
    'no-plusplus': 0,
    'no-nested-ternary': 0,
    'consistent-return': 0,
    'no-param-reassign': 0,
    'no-shadow': 0,
    'no-v-model-argument': 0,
    'prefer-spread': 0,
    'no-multi-assign': 0,
    'default-case': 0,
    'no-case-declarations': 0,
    'no-bitwise': 0,
    'no-unused-expressions': 0,
    'no-use-before-define': 0,
    'no-restricted-syntax': 0,
    'prefer-rest-params': 0,
    'guard-for-in': 0,
    'no-cond-assign': 0,
    'no-continue': 0,
    'id-length': 0,
    'id-match': 0,
    'prefer-const': 0,
    'no-underscore-dangle': 0,
    'no-lonely-if': 0,
    'no-unresolved': 0,
    'no-unused-vars': [
      1,
      {
        args: 'none'
      }
    ],
    eqeqeq: 0,
    'vue/no-v-html': 0,
    'vue/multi-word-component-names': 0
  }
}