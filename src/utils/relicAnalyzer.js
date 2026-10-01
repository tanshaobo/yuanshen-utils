/*
 * @Author: tanshaobo
 * @Date: 2026-09-25 00:00:00
 * @LastEditors: tanshaobo
 * @LastEditTime: 2026-09-25 02:14:50
 * @Description: 圣遗物潜力分析器：枚举 + 条件过滤 + 概率计算
 * @FilePath: \yuanshen-utils\src\utils\relicAnalyzer.js
 */
import { subStatTiers, PERCENT_IDS } from '@/config/subStats'

function generateAllocation(M, N) {
  const results = []
  const arr = new Array(M).fill(0)
  function backtrack(remain, idx) {
    if (idx === M - 1) {
      arr[idx] = remain
      results.push([...arr])
      return
    }
    for (let i = 0; i <= remain; i++) {
      arr[idx] = i
      backtrack(remain - i, idx + 1)
    }
  }
  backtrack(N, 0)
  return results
}

function cartesianProduct(arrays) {
  return arrays.reduce((acc, arr) => {
    if (acc.length === 0) return arr.map((x) => [x])
    const result = []
    for (const a of acc) {
      for (const b of arr) {
        result.push([...a, b])
      }
    }
    return result
  }, [])
}

function computePath(initial, allocation, tierPicks) {
  const finalStats = initial.map((s) => ({ ...s }))
  let pickIdx = 0
  for (let i = 0; i < finalStats.length; i++) {
    const addCount = allocation[i]
    const tiers = subStatTiers[finalStats[i].id]
    let sum = 0
    for (let j = 0; j < addCount; j++) {
      sum += tiers[tierPicks[pickIdx++]]
    }
    finalStats[i].value = +(finalStats[i].value + sum).toFixed(2)
  }
  return finalStats
}

function enumAllPaths(initial, upgradeCount) {
  const M = initial.length
  const N = upgradeCount
  if (N === 0) {
    return [
      {
        allocation: new Array(M).fill(0),
        finalStats: initial.map((s) => ({ ...s })),
        timesPicked: {},
      },
    ]
  }

  const allocations = generateAllocation(M, N)
  const paths = []

  for (const alloc of allocations) {
    const tierArrays = alloc.map((k) => {
      if (k === 0) return []
      const arr = []
      function recur(depth, current) {
        if (depth === k) {
          arr.push([...current])
          return
        }
        for (let t = 0; t < 4; t++) {
          current.push(t)
          recur(depth + 1, current)
          current.pop()
        }
      }
      recur(0, [])
      return arr
    })
    const tierCombos = cartesianProduct(tierArrays)

    for (const combo of tierCombos) {
      const finalStats = computePath(initial, alloc, combo)
      const timesPicked = {}
      for (let i = 0; i < M; i++) {
        timesPicked[initial[i].id] = alloc[i]
      }
      paths.push({ allocation: alloc, finalStats, timesPicked })
    }
  }

  return paths
}

function matchCondition(path, query) {
  switch (query.type) {
    case 'count': {
      const times = path.timesPicked[query.statId] || 0
      return evalOp(times, query.op, query.times)
    }
    case 'count-multi': {
      return query.conditions.every((c) => {
        const times = path.timesPicked[c.statId] || 0
        return evalOp(times, c.op, c.times)
      })
    }
    case 'value': {
      const stat = path.finalStats.find((s) => s.id === query.statId)
      if (!stat) return false
      return evalOp(stat.value, query.op, query.target)
    }
    case 'value-multi': {
      return query.conditions.every((c) => {
        const stat = path.finalStats.find((s) => s.id === c.statId)
        if (!stat) return false
        return evalOp(stat.value, c.op, c.target)
      })
    }
    default:
      return false
  }
}

function evalOp(a, op, b) {
  switch (op) {
    case '>': return a > b
    case '>=': return a >= b
    case '<': return a < b
    case '<=': return a <= b
    case '==': return a === b
    case '!=': return a !== b
    default: return false
  }
}

export function analyzeRelic(relic, query) {
  const initial = relic.unlockEntry
    ? [...relic.subStats, relic.unlockEntry]
    : [...relic.subStats]
  const upgradeCount = relic.remainingUpgrade

  const paths = enumAllPaths(initial, upgradeCount)
  const total = paths.length

  if (!query) {
    return {
      totalCombinations: total,
      distribution: buildDistribution(paths),
    }
  }

  const matched = paths.filter((p) => matchCondition(p, query))

  return {
    totalCombinations: total,
    matchedCombinations: matched.length,
    probability: +(matched.length / total).toFixed(4),
    probabilityPercent: `${((matched.length / total) * 100).toFixed(2)}%`,
    distribution: buildDistribution(matched),
  }
}

function buildDistribution(paths) {
  const statIds = [...new Set(paths.flatMap((p) => p.finalStats.map((s) => s.id)))]
  const dist = {}

  for (const id of statIds) {
    const counter = new Map()
    for (const p of paths) {
      const stat = p.finalStats.find((s) => s.id === id)
      if (stat) {
        counter.set(stat.value, (counter.get(stat.value) || 0) + 1)
      }
    }
    const total = paths.length
    dist[id] = [...counter.entries()]
      .sort((a, b) => a[0] - b[0])
      .map(([value, count]) => ({
        value,
        count,
        prob: +(count / total).toFixed(4),
      }))
  }

  return dist
}

export function getMaxUpgradeCount(initialStatsCount, isThree = false) {
  return isThree ? 4 : 5
}

export { PERCENT_IDS }