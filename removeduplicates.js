const assert = require('assert')

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let stop = false
  let i = 0

  while (!stop) {
    if (nums[i + 1] !== undefined && nums[i + 1] === nums[i]) {
      nums.splice(i, 1)
    } else {
      i++
    }

    stop = i > nums.length - 1
  }

  return nums.length
}

const testCases = [
  {nums: [1, 1, 2], expected: 2},
  {nums: [1], expected: 1},
  {nums: [1, 2, 3, 3, 4], expected: 4},
  {nums: [0, 0, 0, 0, 0], expected: 1},
]

testCases.forEach(test => {
  const actual = removeDuplicates(test.nums)
  assert.equal(actual, test.expected, `nums: ${test.nums}; expected: ${test.expected}; actual: ${actual}`)
})
