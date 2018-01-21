const assert = require('assert')

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  nums1.push(...nums2)
  nums1.sort()
};

const testCases = [
  {nums1: [1, 2, 3], m: 3, nums2: [2, 4], n: 2, expected: [1, 2, 2, 3, 4]}
]

testCases.forEach(test => {
  merge(test.nums1, test.m, test.nums2, test.n)
  assert.deepEqual(test.nums1, test.expected, `nums1: ${test.nums1}, nums2: ${test.nums2}, expected: ${test.expected}`)
})
