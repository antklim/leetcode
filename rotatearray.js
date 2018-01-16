const assert = require('assert')

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
  const n = nums.length
  if (n < 2 || k <= 0) return

  const r = k % n
  const b = nums.splice(n - r, r)
  nums.unshift.apply(nums, b)
}

const testCases = [
  {nums: [1,2,3,4,5,6,7], k: 0, expected: [1,2,3,4,5,6,7]},
  {nums: [1,2,3,4,5,6,7], k: 1, expected: [7,1,2,3,4,5,6]},
  {nums: [1,2,3,4,5,6,7], k: 2, expected: [6,7,1,2,3,4,5]},
  {nums: [1,2,3,4,5,6,7], k: 3, expected: [5,6,7,1,2,3,4]},
  {nums: [1,2,3,4,5,6,7], k: 4, expected: [4,5,6,7,1,2,3]},
  {nums: [1,2,3,4,5,6,7], k: 5, expected: [3,4,5,6,7,1,2]},
  {nums: [1,2,3,4,5,6,7], k: 6, expected: [2,3,4,5,6,7,1]},
  {nums: [1,2,3,4,5,6,7], k: 7, expected: [1,2,3,4,5,6,7]},
  {nums: [1,2,3,4,5,6,7], k: 8, expected: [7,1,2,3,4,5,6]},
]

testCases.forEach(test => {
  rotate(test.nums, test.k)
  assert.deepEqual(test.nums, test.expected, `k: ${test.k}, nums: ${test.nums}, expected: ${test.expected}`)
})
