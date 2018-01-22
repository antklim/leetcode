const assert = require('assert')

/**
 * @param {string[]} strs
 * @return {string}
 */
const prefix = (strs) => {
  let s = ''
  const s0 = strs[0]

  for (let i = 0; i < s0.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== s0[i]) return s
    }
    s += s0[i]
  }

  return s
}

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  switch (strs.length) {
    case 0: return ''
    case 1: return strs.join('')
    default: return prefix(strs)
  }
}

const testCases = [
  {strs: [], expected: ''},
  {strs: ['str'], expected: 'str'},
  {strs: ['str', 'str2', 'st', 'str21'], expected: 'st'},
  {strs: ['str', 'str2', 'st', 'str21', 'sss'], expected: 's'},
  {strs: ['', ''], expected: ''},
]

testCases.forEach(test => {
  const actual = longestCommonPrefix(test.strs)
  assert.deepEqual(actual, test.expected, `strs: ${test.strs}, actual: ${actual}, expected: ${test.expected}`)
})
