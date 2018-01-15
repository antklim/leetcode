const assert = require('assert')

/**
 * @param  {number[]} negatives a list of negatives
 * @param  {number[]} positives a list of positives
 * @return {number[]}           a list of triples which give zero sum
 */
const negativeZeroPositive = (negatives, positives) => {
  const result = []

  let previousElement = null
  for (let i = 0; i < negatives.length; i++) {
    const n = negatives[i]
    if (previousElement !== null && previousElement === n) continue

    const p = -1 * n
    if (positives.includes(p)) result.push([n, 0, p])

    previousElement = n
  }

  return result
}

const nzpTestCases = [
  {negatives: [-1, -2, -5], positives: [1, 1, 2, 3, 4], expected: [[-1, 0, 1], [-2, 0, 2]]},
]

nzpTestCases.forEach(test => {
  const actual = negativeZeroPositive(test.negatives, test.positives)
  assert.deepEqual(actual, test.expected,
    `negatives: ${test.negatives}; positives: ${test.positives}; expected: ${test.expected}; actual: ${actual}`)
})

const matchPositives = (negative, positives, hasZeros) => {
  const result = []

  if (hasZeros && positives.includes(Math.abs(negative))) {
    result.push([0, Math.abs(negative)])
  }

  const rigthIdx = positives.findIndex(e => e >= Math.abs(Math.floor(negative / 2)))

  for (let i = 0; i <= rigthIdx; i++) {
    p = positives[i]
    r = Math.abs(negative + p)

    if (positives.findIndex()) result.push(p, Math.abs(n + p))
  }

  return result
}

/**
 * @param  {number[]} negatives a list of negatives
 * @param  {number[]} positives a list of positives
 * @return {number[]}           a list of triples which give zero sum
 */
const negativePositive = (negatives, positives) => {
  const result = []

  for (let i = 0; i < negatives.length; i++) {
    const n1 = negatives[i]

    // search for negative, positive, positive
    const halfPosition = positives.findIndex(el => {
      el <= Math.abs(Math.floor(n1 / 2))
    })

    if (halfPosition !== -1) {
      for (let j = 0; j <= halfPosition; j++) {
        const p1 = positives[j]
        const p2 = Math.abs(n1 + p1)

        if (positives.includes(p2)) result.push([n1, p1, p2])
      }
    }

    // search for negative, negative, positive
    if (i + 1 < negatives.length) {
      const n2 = negatives[i + 1]
      const p1 = Math.abs(n1 + n2)
      if (positives.includes(p1)) result.push([n1, n2, p1])
    }
  }

  return result
}

const npTestCases = [
  {negatives: [-1, -1, -2, -7, -9], positives: [1, 2, 3, 4, 5, 7, 9], expected: [
    [-1, -1, 2],
    [-1, -2, 3],
    [-2, -7, 9],
    [-7, 2, 5],
    [-7, 3, 4],
    [-9, 2, 7],
    [-9, 4, 5]
  ]}
]

npTestCases.forEach(test => {
  const actual = negativePositive(test.negatives, test.positives)
  assert.deepEqual(actual, test.expected,
    `negatives: ${test.negatives}; positives: ${test.positives};\nexpected:\t${JSON.stringify(test.expected)};\nactual:\t\t${JSON.stringify(actual)}`)
})

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = nums => {
  // Possible outcomes:
  // 1. 0, 0, 0
  // 2. Negative, 0, Positive
  // 3. Negative, Positive, Positive
  // 4. Negative, Negative, Positive

  const result = []
  const negatives = nums.filter(e => e < 0).sort()
  const zeros = nums.filter(e => e === 0)
  const positives = nums.filter(e => e > 0).sort()

  // 1. Seek for the first possible solution
  if (zeros.length >= 3) result.push([0, 0, 0])

  // 1.1 Edge case stop
  if (negatives.length === 0 || positives.length === 0) return result

  // 2. Negative, 0, Positive
  if (zeros.length) {
    result = result.concat(negativeZeroPositive(negatives, positives))
  }

  // 3. Negative, Positive, Positive &
  // 4. Negative, Negative, Positive
  result = result.concat(negativePositive(negatives, positives))

  return result
}


// [-9, -6, -4, -2, -1, -1, 0, 0, 0, 1, 2, 4, 5, 6, 7]
//
// [
//   [0, 0, 0]
//   [-1, 0, 1]
//   [-4, 0, 4]
//   [-6, 0, 6]
//   [-6, 1, 5]
//   [-9, 4, 5]
//   [-9, 2, 7]
//   [6, -4, -2]
// ]
