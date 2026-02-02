/*
 * @Author: tanshaobo
 * @Date: 2022-01-27 15:51:23
 * @LastEditors: tanshaobo
 * @LastEditTime: 2025-12-30 22:35:45
 * @Description: 单一路由
 * @FilePath: \yuanshen-utils\src\router\modules\index.js
 */

import redirect from './redirect'
import roleTalent from './roleTalent'
import algorithm from './algorithm'
import artifacts from './artifacts'
import role from './role'
export default [
  redirect, 
  role,
  roleTalent, 
  algorithm, 
  artifacts
]
