const assert = require('assert')

/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = s => {
  const uniq = {}
  const processed = []

  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i)

    if (!processed.includes(c)) {
      uniq[c] = i
      processed.push(c)
    } else {
      delete uniq[c]
    }
  }

  let minIdx = -1
  for (let key in uniq) {
    if (minIdx < 0) minIdx = uniq[key]
    if (uniq[key] < minIdx) minIdx = uniq[key]
  }

  return minIdx
}

const testCases = [
  {s: 'leetcode', expected: 0},
  {s: 'leetcode', expected: 0},
  {s: 'loveleetcode', expected: 2},
]

testCases.forEach(test => {
  const actual = firstUniqChar(test.s)
  assert.equal(actual, test.expected, `s: ${test.s}; expected: ${test.expected}; actual: ${actual}`)
})
