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

/**
 * @param  {number[]} negatives a list of negatives
 * @param  {number[]} positives a list of positives
 * @return {number[]}           a list of triples which give zero sum
 */
const negativePositivePositive = (negatives, positives) => {
  const result = []
  const rpositives = [].concat(positives).reverse()

  for (let i = 0; i < negatives.length; i++) {
    const n = negatives[i]
    const half = Math.floor(-1 * n / 2)

    let halfPosition = rpositives.findIndex(el => el <= half)

    if (halfPosition !== -1) {
      halfPosition = positives.length - 1 - halfPosition

      let previous = null
      for (let j = 0; j <= halfPosition; j++) {
        if (previous === positives[j]) continue
        previous = positives[j]

        const p1 = positives[j]
        const p2 = Math.abs(n + p1)

        if (positives.findIndex((el, idx) => el === p2 && idx > j) !== -1) result.push([n, p1, p2])
      }
    }
  }

  return result
}

const nppTestCases = [
  {negatives: [-1, -1, -2, -7, -9], positives: [1, 2, 3, 4, 5, 7, 9], expected: [
    [-7, 2, 5],
    [-7, 3, 4],
    [-9, 2, 7],
    [-9, 4, 5]
  ]}
]

nppTestCases.forEach(test => {
  const actual = negativePositivePositive(test.negatives, test.positives)
  assert.deepEqual(actual, test.expected,
    `negatives: ${test.negatives}; positives: ${test.positives};\nexpected:\t${JSON.stringify(test.expected)};\nactual:\t\t${JSON.stringify(actual)}`)
})

/**
 * @param  {number[]} negatives a list of negatives
 * @param  {number[]} positives a list of positives
 * @return {number[]}           a list of triples which give zero sum
 */
const negativeNegativePositive = (negatives, positives) => {
  const result = []

  for (let i = 0; i < positives.length; i++) {
    const p = positives[i]
    const half = -1 * Math.floor(p / 2)

    let halfPosition = negatives.findIndex(el => el < half)

    if (halfPosition !== -1) {
      let previous = null
      for (let j = 0; j <= halfPosition; j++) {
        if (previous === negatives[j]) continue
        previous = negatives[j]

        const n1 = negatives[j]
        const n2 = -1 * (p + n1)

        if (negatives.findIndex((el, idx) => el === n2 && idx > j) !== -1) result.push([n1, n2, p])
      }
    }
  }

  return result
}

const nnpTestCases = [
  {negatives: [-1, -1, -2, -7, -9], positives: [1, 2, 3, 4, 5, 7, 9], expected: [
    [-1, -1, 2],
    [-1, -2, 3],
    [-2, -7, 9],
  ]}
]

nnpTestCases.forEach(test => {
  const actual = negativeNegativePositive(test.negatives, test.positives)
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

  let result = []
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
  result = result.concat(negativePositivePositive(negatives, positives))

  // 4. Negative, Negative, Positive
  result = result.concat(negativeNegativePositive(negatives, positives))

  return result
}

const threeSumTestCases = [
  {nums: [-1, 0, 1, 2, -1, -4], expected: [[-1, 0, 1], [-1, -1, 2]]}
]

threeSumTestCases.forEach(test => {
  const actual = threeSum(test.nums)
  assert.deepEqual(actual, test.expected,
    `nums: ${test.nums};\nexpected:\t${JSON.stringify(test.expected)};\nactual:\t\t${JSON.stringify(actual)}`)
})
