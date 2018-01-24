const assert = require('assert')

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const hash = {}

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) return true
    hash[nums[i]] = 1
  }

  return false
}

const testCases = [
  {nums: [], expected: false},
  {nums: [0], expected: false},
  {nums: [1], expected: false},
  {nums: [1, 2], expected: false},
  {nums: [1, 1], expected: true},
  {nums: [1, 2, 3, 1], expected: true},
]

testCases.forEach(test => {
  const nums = [].concat(...test.nums)
  const actual = containsDuplicate(nums)
  assert.equal(actual, test.expected, `nums: ${test.nums}; expected: ${test.expected}; actual: ${actual}`)
})
