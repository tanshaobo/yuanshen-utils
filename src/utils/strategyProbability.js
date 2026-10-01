function compare(val, op, threshold) {
  if (val === undefined || val === null) return false
  if (op === '>') return val > threshold
  if (op === '=') return val === threshold
  if (op === '>=') return val >= threshold
  return false
}

function binom(n, k) {
  if (k < 0 || k > n) return 0
  if (k === 0 || k === n) return 1
  let result = 1
  for (let i = 0; i < k; i++) result = (result * (n - i)) / (i + 1)
  return Math.round(result)
}

function calcSingleTargetProb(op, threshold, currentAlloc, remaining, totalSlots) {
  const p = 1 / totalSlots
  let prob = 0
  for (let i = 0; i <= remaining; i++) {
    const finalCount = currentAlloc + i
    if (compare(finalCount, op, threshold)) {
      prob += binom(remaining, i) * Math.pow(p, i) * Math.pow(1 - p, remaining - i)
    }
  }
  return prob
}

function calcDualTargetProb(rule, currentAllocA, currentAllocB, remaining, totalSlots) {
  const pTarget = 1 / totalSlots
  const pOther = (totalSlots - 2) / totalSlots
  let prob = 0
  for (let a = 0; a <= remaining; a++) {
    for (let b = 0; b <= remaining - a; b++) {
      const other = remaining - a - b
      const aFinal = currentAllocA + a
      const bFinal = currentAllocB + b
      const aOk = compare(aFinal, rule.opA, rule.thresholdA)
      const bOk = compare(bFinal, rule.opB, rule.thresholdB)
      const satisfied = rule.logic === 'OR' ? aOk || bOk : aOk && bOk
      if (!satisfied) continue
      const multinom = binom(remaining, a) * binom(remaining - a, b)
      prob += multinom * Math.pow(pTarget, a + b) * Math.pow(pOther, other)
    }
  }
  return prob
}

export function calcStrategyProbability(rule, totalMax, currentAlloc, remainingSlots, totalSlots) {
  if (remainingSlots < 0) return 0
  const totalCurrent = [...currentAlloc.values()].reduce((s, c) => s + c, 0)
  if (totalCurrent > totalMax) return 0

  const hasB = !!rule.targetB
  const allocA = currentAlloc.get(rule.targetA) || 0

  if (!hasB) {
    return calcSingleTargetProb(rule.opA, rule.thresholdA, allocA, remainingSlots, totalSlots)
  }

  const allocB = currentAlloc.get(rule.targetB) || 0
  if (rule.targetA === rule.targetB) {
    const op = rule.logic === 'AND' ? rule.opA : rule.opA
    const th = rule.logic === 'AND' ? rule.thresholdA + rule.thresholdB : rule.thresholdA
    return calcSingleTargetProb(op, th, allocA, remainingSlots, totalSlots)
  }

  return calcDualTargetProb(rule, allocA, allocB, remainingSlots, totalSlots)
}

export function calcAllStrategies(strategyList, context) {
  const { totalMax, currentAlloc, remainingSlots, totalSlots } = context
  return strategyList.map((rule) => {
    const isComplete = rule.targetA && rule.opA && rule.thresholdA !== null && rule.thresholdA !== undefined
    const hasB = rule.targetB
    const isFullyComplete = isComplete && (!hasB || (rule.opB && rule.thresholdB !== null && rule.thresholdB !== undefined && rule.logic))
    if (!isFullyComplete) return { id: rule.id, probability: null, valid: false }
    const p = calcStrategyProbability(rule, totalMax, currentAlloc, remainingSlots, totalSlots)
    return { id: rule.id, probability: p, valid: true }
  })
}