<!--
 * @Author: tanshaobo
 * @Date: 2026-09-25 00:00:00
 * @LastEditors: tanshaobo
 * @LastEditTime: 2026-10-01 03:23:19
 * @Description: 圣遗物潜力分析
 * @FilePath: \yuanshen-utils\src\views\Artifacts\Potential\index.vue
-->
<template>
  <div class="potential">
    <el-form :model="form" label-width="100px">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="所属套装">
            <el-select
              v-model="form.relics"
              clearable
              filterable
              placeholder="请选择套装"
              style="width: 100%"
            >
              <el-option
                v-for="item in relicsList"
                :key="item.id"
                :label="item.label"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="部位">
            <el-select
              v-model="form.parts"
              clearable
              filterable
              placeholder="请选择部位"
              style="width: 100%"
            >
              <el-option
                v-for="item in partsList"
                :key="item.id"
                :label="item.label"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="当前强化次数">
            <el-select v-model="form.upgradeCount" placeholder="请选择强化次数" style="width: 100%">
              <el-option v-for="n in upgradeCountOptions" :key="n" :label="n" :value="n" />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item>
            <el-checkbox v-model="form.isThree">初始三词条</el-checkbox>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="主属性">
            <el-select
              v-model="form.mainStat"
              :disabled="!form.parts"
              clearable
              filterable
              :placeholder="form.parts ? '请选择主属性' : '请先选择部位'"
              style="width: 100%"
            >
              <el-option
                v-for="item in mainStatOptions"
                :key="item.id"
                :label="`${item.label} - ${item.desc}`"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-divider content-position="left">
        副属性
        <span class="divider-tip"> 总剩余次数：{{ upgradeRemaining }} </span>
      </el-divider>

      <el-row :gutter="20">
        <el-col :span="24" v-for="i in 4" :key="`sub-${i - 1}`">
          <el-form-item :label="`副属性 ${i}`">
            <el-row :gutter="10" style="width: 100%">
              <el-col :span="9">
                <el-select
                  v-model="form.subStats[i - 1]"
                  :disabled="getSubStatDisabled(i - 1)"
                  clearable
                  filterable
                  :placeholder="getSubStatPlaceholder(i - 1)"
                  style="width: 100%"
                >
                  <el-option
                    v-for="item in getSubStatPool(i - 1)"
                    :key="item.id"
                    :label="`${item.label} - ${item.desc}`"
                    :value="item.id"
                  />
                </el-select>
              </el-col>
              <el-col :span="5">
                <el-select
                  v-model="form.subStatCounts[i - 1]"
                  :disabled="!form.subStats[i - 1]"
                  :placeholder="form.subStats[i - 1] ? '次数' : '—'"
                  style="width: 100%"
                >
                  <el-option
                    v-for="n in getCountOptions(i - 1)"
                    :key="n"
                    :label="`+${n}`"
                    :value="n"
                  />
                </el-select>
              </el-col>
              <el-col :span="10">
                <div class="sub-stat-value-row">
                  <el-select
                    v-model="form.subStatValues[i - 1]"
                    :disabled="!form.subStatCounts[i - 1] && form.subStatCounts[i - 1] !== 0"
                    clearable
                    filterable
                    :placeholder="getValPlaceholder(i - 1)"
                    class="value-select"
                  >
                    <el-option
                      v-for="opt in getValueOptions(i - 1)"
                      :key="opt.val"
                      :label="opt.label"
                      :value="opt.val"
                    />
                  </el-select>
                  <el-checkbox
                    v-model="form.subStatTargets[i - 1]"
                    :disabled="isTargetDisabled(i - 1)"
                    class="target-check"
                  >
                    标记当前指标
                  </el-checkbox>
                </div>
              </el-col>
            </el-row>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <el-divider content-position="left">目标指标分析</el-divider>

    <div v-if="targetAnalysis.length === 0" class="analysis-empty">
      请先标记最多两个期望副属性指标
    </div>

    <div v-else class="analysis-container">
      <el-row :gutter="20">
        <el-col :span="12" v-for="(item, idx) in targetAnalysis" :key="item.index">
          <el-card :body-style="{ padding: '16px' }">
            <template #header>
              <div class="analysis-header">
                <span class="analysis-title">
                  指标 {{ idx + 1 }}：{{ item.statInfo.label }}（{{ item.statInfo.desc }}）
                </span>
                <div class="analysis-header-meta">
                  <span
                    v-if="item.currentValue !== null && item.currentValue !== undefined"
                    class="analysis-inline"
                  >
                    当前值：<strong>{{ formatValue(item.statId, item.currentValue) }}</strong>
                    <span
                      v-if="item.currentCount !== null && item.currentCount !== undefined"
                      class="count-badge"
                    >
                      +{{ item.currentCount }}
                    </span>
                  </span>
                  <span v-else class="analysis-inline muted">当前值：未选择</span>
                  <span v-if="item.inferInfo" class="analysis-inline">
                    反推次数：<strong>{{ item.inferInfo.suggestedRange }}</strong>
                  </span>
                </div>
              </div>
            </template>

            <div v-if="item.fromCurrentValues" class="analysis-section">
              <div class="analysis-section-head">
                <div class="analysis-section-title">
                  ① 剩余 {{ item.remaining }} 次全部投入该指标
                  <span v-if="item.remaining === 0" class="remaining-zero">（已无剩余）</span>
                </div>
                <div class="analysis-section-body">
                  <span class="analysis-inline">
                    可达区间：
                    <strong>
                      {{ formatValue(item.statId, item.fromCurrentRange.min) }} ~
                      {{ formatValue(item.statId, item.fromCurrentRange.max) }}
                    </strong>
                  </span>
                </div>
              </div>
              <div class="analysis-values">
                <el-tag
                  v-for="v in item.fromCurrentValues"
                  :key="`from-${v.val}-${v.times}`"
                  size="small"
                  :type="Math.abs(v.val - item.currentValue) < 0.05 ? 'danger' : ''"
                  class="value-tag"
                >
                  {{ formatValue(item.statId, v.val)
                  }}<span class="value-times">({{ v.times }})</span>
                </el-tag>
              </div>
            </div>

            <div class="analysis-section">
              <div class="analysis-section-head">
                <div class="analysis-section-title">
                  ② 最大次数（{{ item.totalMax }}次）全部投入该指标
                </div>
                <div class="analysis-section-body">
                  <span class="analysis-inline">
                    理论区间：
                    <strong>
                      {{ formatValue(item.statId, item.maxRange.min) }} ~
                      {{ formatValue(item.statId, item.maxRange.max) }}
                    </strong>
                  </span>
                </div>
              </div>
              <div class="analysis-values">
                <el-tag
                  v-for="v in item.maxAllValues"
                  :key="`max-${v.val}-${v.times}`"
                  size="small"
                  class="value-tag"
                >
                  {{ formatValue(item.statId, v.val)
                  }}<span class="value-times">({{ v.times }})</span>
                </el-tag>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <el-divider content-position="left">策略组</el-divider>

    <div v-if="targetStatIds.length < 2" class="analysis-empty">
      策略组需要同时标记两个期望副属性指标才能启用
    </div>

    <div v-else class="strategy-container">
      <div class="strategy-toolbar">
        <span class="strategy-context">
          目标指标：
          <strong>{{ getStrategyTargetLabel(targetStatIds[0]) }}</strong>
          已分配 {{ targetAlloc.get(targetStatIds[0]) ?? 0 }} 次 /
          <strong>{{ getStrategyTargetLabel(targetStatIds[1]) }}</strong>
          已分配 {{ targetAlloc.get(targetStatIds[1]) ?? 0 }} 次
          <span class="strategy-context-sep">|</span>
          剩余槽位：<strong>{{ strategyRemaining }}</strong>
        </span>
        <el-button type="primary" :icon="Plus" @click="addStrategyRule">添加条件</el-button>
      </div>

      <div class="strategy-rules">
        <el-card
          v-for="(rule, idx) in strategyList"
          :key="rule.id"
          :body-style="{ padding: '12px 16px' }"
          class="strategy-rule-card"
        >
          <div class="strategy-rule-row">
            <span class="strategy-rule-index">{{ idx + 1 }}</span>

            <el-select
              v-model="rule.targetA"
              clearable
              filterable
              placeholder="指标 A"
              class="strategy-select"
            >
              <el-option
                v-for="opt in getStrategyTargetOptions(null)"
                :key="opt.value"
                :label="opt.label"
                :value="opt.value"
              />
            </el-select>

            <el-select v-model="rule.opA" class="strategy-op">
              <el-option label=">" value=">" />
              <el-option label="=" value="=" />
            </el-select>

            <el-select
              v-model="rule.ruleValueA"
              class="strategy-threshold"
              :disabled="!rule.targetA"
              filterable
              placeholder="数值"
            >
              <el-option
                v-for="opt in buildValueOptions(rule.targetA, 0)"
                :key="opt.val"
                :label="`${formatValue(rule.targetA, opt.val)} (+${opt.times})`"
                :value="opt.val"
              />
            </el-select>

            <el-select v-model="rule.logic" class="strategy-logic" :disabled="!rule.targetA">
              <el-option label="且" value="AND" />
              <el-option label="或" value="OR" />
            </el-select>

            <el-select
              v-model="rule.targetB"
              clearable
              filterable
              :placeholder="rule.targetA ? '指标 B（可选）' : '—'"
              class="strategy-select"
              :disabled="!rule.targetA"
            >
              <el-option
                v-for="opt in getStrategyTargetOptions(rule.targetA)"
                :key="opt.value"
                :label="opt.label"
                :value="opt.value"
              />
            </el-select>

            <el-select v-model="rule.opB" class="strategy-op" :disabled="!rule.targetB">
              <el-option label=">" value=">" />
              <el-option label="=" value="=" />
            </el-select>

            <el-select
              v-model="rule.ruleValueB"
              class="strategy-threshold"
              :disabled="!rule.targetB"
              filterable
              placeholder="数值"
            >
              <el-option
                v-for="opt in buildValueOptions(rule.targetB, 0, rule)"
                :key="opt.val"
                :label="`${formatValue(rule.targetB, opt.val)} (+${opt.times})`"
                :value="opt.val"
              />
            </el-select>

            <span class="strategy-prob">
              概率：
              <template v-if="strategyResults.find((r) => r.id === rule.id)?.valid">
                <strong class="prob-success">
                  {{
                    (strategyResults.find((r) => r.id === rule.id).probability * 100).toFixed(4)
                  }}%
                </strong>
              </template>
              <template v-else>
                <strong class="prob-muted">待计算</strong>
              </template>
            </span>

            <el-button
              type="danger"
              link
              :icon="Delete"
              class="strategy-delete"
              @click="removeStrategyRule(rule.id)"
            />
          </div>
        </el-card>
      </div>

      <div class="strategy-footer">
        <el-button @click="accumulateProbabilities">概率累加</el-button>
        <el-button type="primary" @click="recalcStrategies">计算概率</el-button>
      </div>

      <div v-if="accumulatedProb !== null" class="strategy-accumulated">
        <span
          >有效策略数：<strong>{{ accumulatedValidCount }}</strong></span
        >
        <span
          >累加概率：<strong class="prob-success"
            >{{ (accumulatedProb * 100).toFixed(4) }}%</strong
          ></span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed, watch, nextTick } from 'vue'
import { ElMessage } from 'element-plus'
import { Plus, Delete } from '@element-plus/icons-vue'
import { relicsList, partsList } from '@/config/relics'
import { baseStats, getMainStatsByPart } from '@/config/stats'
import {
  getAllPossibleValues,
  getAllTieredValues,
  PERCENT_IDS,
  inferUpgradeCount,
  getRange
} from '@/config/subStats'
import { calcAllStrategies } from '@/utils/strategyProbability'

const subStatsPool = baseStats.filter((s) => s.id <= 10)

const formatValue = (statId, val) => {
  if (val === null || val === undefined || val === '') return ''
  const isPercent = PERCENT_IDS.includes(statId)
  const oneDecimal = +(Math.round(val * 10) / 10).toFixed(2)
  const exact = +val.toFixed(2)
  const decimals = oneDecimal === exact ? 1 : 2
  const display = val.toFixed(decimals)
  return `${display}${isPercent ? '%' : ''}`
}

const resetSubChain = (from = 0) => {
  for (let j = from; j < 4; j++) {
    form.subStats[j] = null
    form.subStatCounts[j] = null
    form.subStatValues[j] = null
    form.subStatTargets[j] = false
  }
}

const form = reactive({
  relics: relicsList[0]?.id ?? '',
  parts: partsList[0]?.id ?? '',
  upgradeCount: 0,
  isThree: false,
  mainStat: getMainStatsByPart(partsList[0]?.id)?.[0]?.id ?? null,
  subStats: [null, null, null, null],
  subStatCounts: [null, null, null, null],
  subStatValues: [null, null, null, null],
  subStatTargets: [false, false, false, false]
})

const mainStatOptions = computed(() => getMainStatsByPart(form.parts))

const upgradeCountOptions = computed(() => {
  const maxTimes = form.isThree ? 4 : 5
  const arr = []
  for (let n = 0; n <= maxTimes; n++) arr.push(n)
  return arr
})

const allocatedBefore = (i) => form.subStatCounts.slice(0, i).reduce((sum, n) => sum + (n ?? 0), 0)

const upgradeRemaining = computed(() => {
  const total = form.upgradeCount ?? 0
  return Math.max(0, total - allocatedBefore(4))
})

const getSubStatPool = (i) => {
  const excluded = [form.mainStat, ...form.subStats.slice(0, i)].filter(Boolean)
  return subStatsPool.filter((s) => !excluded.includes(s.id))
}

const getSubStatDisabled = (i) => {
  if (i === 0) return !form.mainStat
  return !form.subStats[i - 1]
}

const getSubStatPlaceholder = (i) => {
  if (!form.mainStat && i === 0) return '请先选择主属性'
  if (i > 0 && !form.subStats[i - 1]) return `请先选择副属性${i}`
  return '请选择属性'
}

const getCountOptions = (i) => {
  const total = form.upgradeCount ?? 0
  const remaining = total - allocatedBefore(i)
  const isLast = i === 3
  const isLocked = isLast && remaining === 0

  if (isLocked && form.subStats[i]) return [0]
  if (remaining <= 0 && !form.subStats[i]) return [0]
  if (remaining < 0) return []

  const max = Math.max(0, remaining)
  const arr = []
  for (let n = 0; n <= max; n++) arr.push(n)
  if (isLast && form.subStats[i] && remaining >= 0) return [arr[arr.length - 1]]
  return arr
}

const getValueOptions = (i) => {
  const statId = form.subStats[i]
  const times = form.subStatCounts[i]
  if (!statId || times === null || times === undefined) return []

  const isInitial = times === 0
  return getAllPossibleValues(statId, times).map((val) => ({
    val,
    label: isInitial
      ? `${formatValue(statId, val)} (初始)`
      : `${formatValue(statId, val)} (+${times})`
  }))
}

const getValPlaceholder = (i) => {
  if (!form.subStats[i]) return '—'
  if (form.subStatCounts[i] === null || form.subStatCounts[i] === undefined) return '请先选择次数'
  return '请选择数值'
}

const MAX_TARGETS = 2

const targetSelectedCount = computed(() => form.subStatTargets.filter(Boolean).length)

const isTargetDisabled = (i) => {
  if (!form.subStats[i]) return true
  if (form.subStatTargets[i]) return false
  return targetSelectedCount.value >= MAX_TARGETS
}

const TOTAL_MAX_TIMES = computed(() => (form.isThree ? 4 : 5))

const targetAnalysis = computed(() => {
  const result = []
  for (let i = 0; i < 4; i++) {
    if (!form.subStatTargets[i]) continue
    const statId = form.subStats[i]
    if (!statId) continue

    const statInfo = subStatsPool.find((s) => s.id === statId)
    const currentValue = form.subStatValues[i]
    const currentCount = form.subStatCounts[i]
    const totalMax = TOTAL_MAX_TIMES.value
    const totalAllocated = form.subStatCounts.reduce((sum, n) => sum + (n ?? 0), 0)

    const maxTiered = getAllTieredValues(statId, totalMax)
    const maxValMap = new Map()
    for (const { value, tier } of maxTiered) {
      if (!maxValMap.has(value)) maxValMap.set(value, new Set())
      maxValMap.get(value).add(tier)
    }
    const maxAllValues = [...maxValMap.entries()]
      .sort(([a], [b]) => a - b)
      .map(([val, ts]) => ({ val, times: [...ts].join('|') }))
    const maxRange = getRange(statId, totalMax)

    let inferInfo = null
    let remaining = null
    let fromCurrentValues = null
    let fromCurrentRange = null

    if (currentValue !== null && currentValue !== undefined && currentValue !== '') {
      inferInfo = inferUpgradeCount(statId, currentValue)
      if (currentCount !== null && currentCount !== undefined) {
        remaining = Math.max(0, totalMax - totalAllocated)
        const valMap = new Map()
        for (let t = 0; t <= remaining; t++) {
          const absVals = getAllPossibleValues(statId, currentCount + t)
          for (const v of absVals) {
            if (v < currentValue - 0.001) continue
            if (!valMap.has(v)) valMap.set(v, new Set())
            valMap.get(v).add(t)
          }
        }
        fromCurrentValues = [...valMap.entries()]
          .sort(([a], [b]) => a - b)
          .map(([val, ts]) => ({ val, times: [...ts].join('|') }))
        const len = fromCurrentValues.length
        fromCurrentRange = {
          min: fromCurrentValues[0]?.val ?? currentValue,
          max: fromCurrentValues[len - 1]?.val ?? currentValue
        }
      }
    }

    result.push({
      index: i,
      statId,
      statInfo,
      currentValue,
      currentCount,
      totalMax,
      remaining,
      maxAllValues,
      maxRange,
      inferInfo,
      fromCurrentValues,
      fromCurrentRange
    })
  }
  return result
})

const strategyList = ref([createEmptyRule(1)])
const strategyResults = ref([])
const accumulatedProb = ref(null)
const accumulatedValidCount = ref(0)
let strategyRuleIdSeed = 1

function createEmptyRule(id) {
  return {
    id,
    targetA: null,
    opA: '>',
    thresholdA: null,
    ruleValueA: null,
    logic: 'AND',
    targetB: null,
    opB: '>',
    thresholdB: null,
    ruleValueB: null
  }
}

const targetStatIds = computed(() => {
  const ids = []
  for (let i = 0; i < 4; i++) {
    if (form.subStatTargets[i] && form.subStats[i]) ids.push(form.subStats[i])
  }
  return ids
})

const targetAlloc = computed(() => {
  const map = new Map()
  for (let i = 0; i < 4; i++) {
    if (
      form.subStatTargets[i] &&
      form.subStats[i] &&
      form.subStatCounts[i] !== null &&
      form.subStatCounts[i] !== undefined
    ) {
      map.set(form.subStats[i], form.subStatCounts[i])
    }
  }
  return map
})

const totalAllocatedAll = computed(() => form.subStatCounts.reduce((sum, n) => sum + (n ?? 0), 0))

const strategyRemaining = computed(() =>
  Math.max(0, TOTAL_MAX_TIMES.value - totalAllocatedAll.value)
)

const strategyContext = computed(() => ({
  totalMax: TOTAL_MAX_TIMES.value,
  currentAlloc: targetAlloc.value,
  remainingSlots: strategyRemaining.value,
  totalSlots: 4
}))

function getStatCurrentInfo(statId) {
  for (let i = 0; i < 4; i++) {
    if (form.subStatTargets[i] && form.subStats[i] === statId) {
      return {
        currentValue: form.subStatValues[i] ?? 0,
        currentAlloc: form.subStatCounts[i] ?? 0
      }
    }
  }
  return { currentValue: 0, currentAlloc: 0 }
}

function inferTimesFromValue(statId, pickedValue) {
  const inferred = inferUpgradeCount(statId, pickedValue)
  const matched = Object.entries(inferred.possibleCounts)
    .filter(([, v]) => v.possible)
    .map(([k]) => +k)
  if (matched.length === 0) return null
  return Math.min(...matched)
}

function buildValueOptions(statId, _ignored, ruleCtx = null) {
  if (!statId) return []
  const { currentValue, currentAlloc } = getStatCurrentInfo(statId)
  let effectiveRemaining = strategyRemaining.value

  if (ruleCtx && ruleCtx.targetA && ruleCtx.targetA !== statId && ruleCtx.thresholdA !== null) {
    const aInfo = getStatCurrentInfo(ruleCtx.targetA)
    const aExtra = Math.max(0, ruleCtx.thresholdA - aInfo.currentAlloc)
    effectiveRemaining = Math.max(0, effectiveRemaining - aExtra)
  }

  const valToTimes = new Map()
  for (let t = 0; t <= effectiveRemaining; t++) {
    const totalTimes = currentAlloc + t
    const absValues = getAllPossibleValues(statId, totalTimes)
    absValues.forEach((v) => {
      const fixed = +v.toFixed(2)
      if (fixed >= currentValue - 0.05) {
        if (!valToTimes.has(fixed)) valToTimes.set(fixed, new Set())
        valToTimes.get(fixed).add(t)
      }
    })
  }
  return [...valToTimes.entries()]
    .sort(([a], [b]) => a - b)
    .map(([val, timesSet]) => ({
      val,
      times: [...timesSet].sort((a, b) => a - b).join('|')
    }))
}

function getStrategyTargetOptions(excludeId) {
  return targetStatIds.value
    .filter((id) => id !== excludeId)
    .map((id) => {
      const info = subStatsPool.find((s) => s.id === id)
      return { value: id, label: info ? `${info.label}(${info.desc})` : String(id) }
    })
}

function getStrategyTargetLabel(statId) {
  if (!statId) return ''
  const info = subStatsPool.find((s) => s.id === statId)
  return info ? info.label : String(statId)
}

function addStrategyRule() {
  strategyRuleIdSeed++
  const rule = createEmptyRule(strategyRuleIdSeed)
  strategyList.value.push(rule)
  bindRuleWatchers(rule)
}

function removeStrategyRule(id) {
  if (strategyList.value.length <= 1) {
    ElMessage.warning('至少保留一条条件')
    return
  }
  strategyList.value = strategyList.value.filter((r) => r.id !== id)
  recalcStrategies()
}

function bindRuleWatchers(rule) {
  watch(
    () => rule.targetA,
    () => {
      rule.thresholdA = null
      rule.ruleValueA = null
      rule.thresholdB = null
      rule.ruleValueB = null
    }
  )

  watch(
    () => rule.targetB,
    () => {
      rule.thresholdB = null
      rule.ruleValueB = null
    }
  )

  watch(
    () => rule.ruleValueA,
    (val) => {
      if (val === null || val === undefined) {
        rule.thresholdA = null
        return
      }
      const finalTimes = inferTimesFromValue(rule.targetA, val)
      if (finalTimes === null) {
        ElMessage.warning('所选数值不在可计算范围内，请重新选择')
        rule.ruleValueA = null
        rule.thresholdA = null
        return
      }
      rule.thresholdA = finalTimes
      rule.thresholdB = null
      rule.ruleValueB = null
    }
  )

  watch(
    () => rule.ruleValueB,
    (val) => {
      if (val === null || val === undefined) {
        rule.thresholdB = null
        return
      }
      const finalTimes = inferTimesFromValue(rule.targetB, val)
      if (finalTimes === null) {
        ElMessage.warning('所选数值不在可计算范围内，请重新选择')
        rule.ruleValueB = null
        rule.thresholdB = null
        return
      }
      rule.thresholdB = finalTimes
    }
  )
}

strategyList.value.forEach(bindRuleWatchers)

function recalcStrategies() {
  if (targetStatIds.value.length === 0) {
    strategyResults.value = []
    accumulatedProb.value = null
    accumulatedValidCount.value = 0
    return
  }
  strategyResults.value = calcAllStrategies(strategyList.value, strategyContext.value)
  accumulatedProb.value = null
  accumulatedValidCount.value = 0
}

function accumulateProbabilities() {
  const validItems = strategyResults.value.filter((r) => r.valid && r.probability !== null)
  accumulatedValidCount.value = validItems.length
  if (validItems.length === 0) {
    accumulatedProb.value = 0
    return
  }
  accumulatedProb.value = validItems.reduce((sum, r) => sum + r.probability, 0)
}

watch(
  [targetStatIds, () => strategyContext.value.totalMax, () => strategyContext.value.remainingSlots],
  () => {
    recalcStrategies()
  },
  { deep: true }
)

watch(
  () => form.parts,
  () => {
    form.mainStat = getMainStatsByPart(form.parts)?.[0]?.id ?? null
    resetSubChain(0)
  }
)

watch(
  () => form.mainStat,
  () => {
    resetSubChain(0)
  }
)

watch(
  () => form.upgradeCount,
  () => {
    resetSubChain(0)
  }
)

watch(
  () => form.isThree,
  (val) => {
    const max = val ? 4 : 5
    if (form.upgradeCount !== null && form.upgradeCount > max) {
      form.upgradeCount = max
    }
    resetSubChain(0)
  }
)

for (let i = 0; i < 4; i++) {
  watch(
    () => form.subStats[i],
    () => {
      resetSubChain(i + 1)
      autoFillSubStat(i)
    }
  )

  watch(
    () => form.subStatCounts[i],
    () => {
      form.subStatValues[i] = null
      for (let j = i + 1; j < 4; j++) {
        form.subStatCounts[j] = null
        form.subStatValues[j] = null
      }
      nextTick(() => {
        if (form.subStats[i] && form.subStatCounts[i] !== null) {
          const valOpts = getValueOptions(i)
          if (valOpts.length > 0) {
            form.subStatValues[i] = valOpts[0].val
          }
        }
      })
    }
  )
}

function autoFillSubStat(i) {
  const countOpts = getCountOptions(i)
  if (countOpts.length === 0) return
  form.subStatCounts[i] = countOpts[0]
  nextTick(() => {
    const valOpts = getValueOptions(i)
    if (valOpts.length > 0) {
      form.subStatValues[i] = valOpts[0].val
    }
  })
}
</script>

<style lang="stylus" scoped>
.potential
  padding 20px
.divider-tip
  font-size 12px
  color #909399
  margin-left 12px
  font-weight normal
.sub-stat-value-row
  display flex
  align-items center
  gap 10px
  width 100%
.value-select
  flex 1
  min-width 0
.target-check
  flex-shrink 0
  white-space nowrap
.analysis-empty
  text-align center
  padding 40px 0
  color #909399
  font-size 14px
.analysis-container
  margin-bottom 20px
.analysis-header
  display flex
  justify-content space-between
  align-items center
.analysis-title
  font-size 14px
  font-weight 600
  color #303133
  white-space nowrap
.analysis-header-meta
  display flex
  justify-content flex-end
  align-items center
  gap 16px
  flex-shrink 0
.analysis-section
  margin-bottom 14px
  &:last-child
    margin-bottom 0
.analysis-section-head
  display flex
  justify-content space-between
  align-items center
  gap 16px
.analysis-section-title
  font-size 12px
  color #606266
  padding-left 8px
  border-left 3px solid #409eff
  flex-shrink 0
.analysis-section-body
  display flex
  justify-content flex-end
  align-items center
  gap 16px
  flex 1
  min-width 0
.analysis-inline
  font-size 13px
  color #303133
  white-space nowrap
  strong
    color #409eff
  &.muted
    color #909399
.count-badge
  display inline-block
  margin-left 6px
  padding 1px 6px
  background #ecf5ff
  color #409eff
  border-radius 10px
  font-size 11px
.value-tag
  margin 2px 4px 2px 0
.value-times
  opacity 0.65
  font-size 11px
  margin-left 1px
.remaining-zero
  color #f56c6c
  font-size 12px
  margin-left 6px
.analysis-values
  margin-top 8px
.strategy-container
  margin-bottom 20px
.strategy-alert
  margin-bottom 12px
.strategy-toolbar
  display flex
  justify-content space-between
  align-items center
  margin-bottom 12px
.strategy-context
  font-size 13px
  color #606266
  strong
    color #303133
.strategy-context-sep
  margin 0 10px
  color #dcdfe6
.strategy-rules
  display flex
  flex-direction column
  gap 10px
.strategy-rule-card
.strategy-rule-row
  display flex
  align-items center
  gap 8px
  flex-wrap nowrap
.strategy-rule-index
  width 20px
  height 20px
  line-height 20px
  text-align center
  border-radius 50%
  background #ecf5ff
  color #409eff
  font-size 12px
  font-weight 600
  flex-shrink 0
.strategy-select
  width 170px
  flex-shrink 0
.strategy-op
  width 60px
  flex-shrink 0
.strategy-threshold
  width 120px
  flex-shrink 0
.strategy-logic
  width 60px
  flex-shrink 0
.strategy-prob
  margin-left auto
  font-size 13px
  color #606266
  white-space nowrap
  .prob-success
    color #67c23a
  .prob-muted
    color #909399
.strategy-delete
  flex-shrink 0
.strategy-footer
  margin-top 12px
  display flex
  justify-content flex-end
  gap 8px
.strategy-accumulated
  margin-top 12px
  padding 10px 16px
  background #f0f9eb
  border 1px solid #e1f3d8
  border-radius 4px
  display flex
  justify-content flex-end
  gap 24px
  font-size 14px
  span
    color #606266
    strong
      color #303133
      margin-left 4px
</style>
