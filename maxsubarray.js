const assert = require('assert')

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  const size = nums.length
  let globalMax = nums[0]
  let localMax = nums[0]
  let sg = eg = 0
  let sl = el = 0

  for (let i = 1; i < size; i++) {
    localMax = Math.max(nums[i], localMax + nums[i])
    if (localMax === nums[i]) {
      sl = i
    } else {
      el = i
    }

    globalMax = Math.max(globalMax, localMax)
    if (globalMax === localMax) {
      sg = sl
      eg = i
    }
  }

  console.log(sg, eg);

  return globalMax
}

const testCases = [
  {nums: [1], expected: 1},
  {nums: [1, 2], expected: 3},
  {nums: [1, -2], expected: 1},
  {nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4], expected: 6},
]

testCases.forEach(test => {
  const actual = maxSubArray(test.nums)
  assert.equal(actual, test.expected, `nums: ${JSON.stringify(test.nums)}, actual: ${actual}, expected: ${test.expected}`)
})
