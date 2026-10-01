/* eslint-disable */
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
};

const MAX = 5;

function computeOnce(tiers, times) {
  const result = new Set();
  let queue = [...tiers];
  for (let t = 0; t < times; t++) {
    const next = [];
    for (const val of queue) for (const tier of tiers) next.push(val + tier);
    queue = next;
  }
  for (const v of queue) result.add(+v.toFixed(2));
  return [...result].sort((a, b) => a - b);
}

console.log('=== 精确多解统计（同一数值精确出现在多个 t 的 bucket）===\n');

for (const [id, tiers] of Object.entries(subStatTiers)) {
  const statId = +id;
  const buckets = {};
  const sets = {};
  for (let t = 0; t <= MAX; t++) {
    buckets[t] = computeOnce(tiers, t);
    sets[t] = new Set(buckets[t]);
  }

  const valToTs = {};
  for (let t = 0; t <= MAX; t++) {
    for (const v of buckets[t]) {
      if (!valToTs[v]) valToTs[v] = [];
      if (!valToTs[v].includes(t)) valToTs[v].push(t);
    }
  }

  const exactMulti = Object.entries(valToTs).filter(([, ts]) => ts.length > 1);

  console.log(`\nstatId=${statId} tiers=[${tiers.join(', ')}]`);
  console.log(`  精确多解数: ${exactMulti.length}`);
  if (exactMulti.length > 0) {
    exactMulti.forEach(([v, ts]) => {
      console.log(`    ${v}  ->  t = ${ts.join(' | ')}`);
    });
  }

  // 额外检查：容差 0.05 下，各 bucket 之间的值是否互相交叉命中
  const tolMulti = new Set();
  for (let a = 0; a <= MAX; a++) {
    for (let b = a + 1; b <= MAX; b++) {
      for (const va of buckets[a]) {
        for (const vb of buckets[b]) {
          if (Math.abs(va - vb) < 0.05) {
            tolMulti.add(`${va}(t${a}) ≈ ${vb}(t${b}) diff=${(Math.abs(va - vb)).toFixed(4)}`);
          }
        }
      }
    }
  }

  if (tolMulti.size > 0) {
    console.log(`  容差交叉命中 (<0.05): ${tolMulti.size} 组`);
    [...tolMulti].slice(0, 15).forEach((line) => console.log(`    ${line}`));
    if (tolMulti.size > 15) console.log(`    ... 还有 ${tolMulti.size - 15} 组`);
  }
}