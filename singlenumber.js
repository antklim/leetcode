const assert = require('assert')

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) return nums[i]
  }

  return nums[nums.length - 1]
}

const testCases = [
  {nums: [1, 2], expected: 1},
  {nums: [1, 2, 1], expected: 2},
  {nums: [1], expected: 1},
  {nums: [1, 2, 1, 3, 3, 4, 2], expected: 4},
  {nums: [0, 0, 5, 0, 0], expected: 5},
]

testCases.forEach(test => {
  const actual = singleNumber(test.nums)
  assert.equal(actual, test.expected, `nums: ${test.nums}; expected: ${test.expected}; actual: ${actual}`)
})
