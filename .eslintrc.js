module.exports = {
  globals: {
    defineEmits: true,
    defineProps: true,
    defineExpose: true
  },
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'airbnb-base',
    'plugin:prettier/recommended' // 添加 prettier 插件
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['vue'],
  settings: {
    'import/resolver': {
      // 识别别名
      alias: {
        map: [
          ['@', './src'],
          ['@common', './src/components/common']
        ],
        extensions: ['.ts', '.js', '.jsx', '.json']
      }
    }
  },
  rules: {
    // "off"或者0    //关闭规则关闭
    // "warn"或者1    //在打开的规则作为警告（不影响退出代码）
    // "error"或者2    //把规则作为一个错误（退出代码触发时为1
    'arrow-parens': 0, // 箭头函数用小括号括起来
    'arrow-spacing': 0, //= >的前/后括号
    'no-plusplus': 0, // 可使用依云操作符 ++ 和 --
    'no-nested-ternary': 0, // 可使用三元表达式
    'consistent-return': 0, // 箭头函数可以没有返回值
    'no-param-reassign': 0, // 允许对函数的参数重新赋值
    'no-shadow': 0, // 局部变量可以与外层变量重名
    'no-v-model-argument': 0, // v-model 不能有参数校验关闭
    'prefer-spread': 0, // 要求使用扩展运算符而非 .apply()
    'no-multi-assign': 0, // a = b = c = d
    'default-case': 0, // 默认值预设
    'no-case-declarations': 0, // case 中可以声明变量
    'no-bitwise': 0, // 允许意外字符
    'no-unused-expressions': 0, // 期望赋值或函数调用，却看到一个表达式。
    'no-use-before-define': 0, // 函数可以先使用后声明
    'no-restricted-syntax': 0, // for in
    'prefer-rest-params': 0, // 参数可以使用arguments
    'guard-for-in': 0, // for in 里面可以放if
    'no-cond-assign': 0, // 允许在if语句判断条件里面赋值
    'no-continue': 0, // 允许使用continue
    'id-length': 0, // 变量名长度
    'id-match': 0, // 命名检测
    'prefer-const': 0, // 要求使用 const 声明那些声明后不再被修改的变量
    'no-underscore-dangle': 0, // 标识符不能以_开头或结尾
    'no-lonely-if': 0, // 允许只写if不写else
    'no-unresolved': 0, // 引入模块无法解析
    'no-unused-vars': [
      1,
      {
        // 参数不检查
        args: 'none'
      }
    ],
    'vue/script-setup-uses-vars': 0,
    eqeqeq: 0 // 允许使用 == !=
  }
}
