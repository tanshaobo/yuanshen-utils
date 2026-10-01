/*
 * @Author: tanshaobo
 * @Date: 2026-09-25 00:00:00
 * @LastEditors: tanshaobo
 * @LastEditTime: 2026-10-01 03:21:06
 * @Description: 圣遗物副词条 —— 顶层预计算缓存所有可能值
 * @FilePath: \yuanshen-utils\src\config\subStats.js
 */
const subStatTiers = {
  1: [4.08, 4.66, 5.25, 5.83],
  2: [5.10, 5.83, 6.56, 7.29],
  3: [4.08, 4.66, 5.25, 5.83],
  4: [13.62, 15.56, 17.51, 19.45],
  5: [16.20, 18.52, 20.83, 23.15],
  6: [209.13, 239.00, 268.88, 298.75],
  7: [2.72, 3.11, 3.50, 3.89],
  8: [5.44, 6.22, 6.99, 7.77],
  9: [16.32, 18.65, 20.98, 23.31],
  10: [4.53, 5.18, 5.83, 6.48],
}

const PERCENT_IDS = [1, 2, 3, 7, 8, 10]
const MAX_PRECOMPUTE_TIMES = 5

const POSSIBLE_VALUE_CACHE = {}
const TIERED_VALUE_CACHE = {}
const VALUE_SET_CACHE = {}

;(() => {
  const computeOnce = (tiers, times) => {
    const result = new Set()
    let queue = [...tiers]
    for (let t = 0; t < times; t++) {
      const next = []
      for (const val of queue) for (const tier of tiers) next.push(val + tier)
      queue = next
    }
    for (const v of queue) result.add(+v.toFixed(2))
    return [...result].sort((a, b) => a - b)
  }

  const computeTiered = (tiers, maxTimes) => {
    const result = []
    let queue = [...tiers]
    for (let t = 0; t <= maxTimes; t++) {
      for (const v of queue) result.push({ value: +v.toFixed(2), tier: t })
      if (t < maxTimes) {
        const next = []
        for (const val of queue) for (const tier of tiers) next.push(val + tier)
        queue = next
      }
    }
    return result
  }

  Object.keys(subStatTiers).forEach((id) => {
    const statId = +id
    const tiers = subStatTiers[statId]
    POSSIBLE_VALUE_CACHE[statId] = {}
    TIERED_VALUE_CACHE[statId] = {}
    VALUE_SET_CACHE[statId] = {}

    for (let t = 0; t <= MAX_PRECOMPUTE_TIMES; t++) {
      POSSIBLE_VALUE_CACHE[statId][t] = computeOnce(tiers, t)
      VALUE_SET_CACHE[statId][t] = new Set(POSSIBLE_VALUE_CACHE[statId][t])
    }
    TIERED_VALUE_CACHE[statId][MAX_PRECOMPUTE_TIMES] = computeTiered(tiers, MAX_PRECOMPUTE_TIMES)
  })
})()

export function getAllPossibleValues(statId, times) {
  const bucket = POSSIBLE_VALUE_CACHE[statId]
  if (!bucket) return []
  const clamped = Math.min(Math.max(times, 0), MAX_PRECOMPUTE_TIMES)
  return bucket[clamped] ?? []
}

export function getAllTieredValues(statId, maxTimes) {
  const full = TIERED_VALUE_CACHE[statId]?.[MAX_PRECOMPUTE_TIMES]
  if (!full) return []
  const clamped = Math.min(Math.max(maxTimes, 0), MAX_PRECOMPUTE_TIMES)
  if (clamped === MAX_PRECOMPUTE_TIMES) return full
  return full.filter((item) => item.tier <= clamped)
}

export function getRange(statId, times) {
  const values = getAllPossibleValues(statId, times)
  if (!values.length) return { min: 0, max: 0 }
  return { min: values[0], max: values[values.length - 1] }
}

export function inferUpgradeCount(statId, currentValue) {
  const bucket = POSSIBLE_VALUE_CACHE[statId]
  const setBucket = VALUE_SET_CACHE[statId]
  if (!bucket) return { possibleCounts: {}, suggestedRange: '无法匹配' }

  const result = {}
  const matched = []

  for (let t = 0; t <= MAX_PRECOMPUTE_TIMES; t++) {
    const values = bucket[t]
    const valuesSet = setBucket[t]
    const len = values.length
    const possible = valuesSet.has(currentValue)

    result[t] = {
      min: values[0] ?? 0,
      max: values[len - 1] ?? 0,
      possible,
      values,
    }
    if (possible) matched.push(t)
  }

  return {
    possibleCounts: result,
    suggestedRange: matched.length ? `${Math.min(...matched)}~${Math.max(...matched)} 次` : '无法匹配',
  }
}

export { subStatTiers, PERCENT_IDS, POSSIBLE_VALUE_CACHE, VALUE_SET_CACHE }
export default subStatTiers