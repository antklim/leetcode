const assert = require('assert')

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('')
  // if (s.length !== t.length) return false
  //
  // let s1 = s
  // let t1 = t
  //
  // while(true) {
  //   if (!s1.length) break
  //   let c = s1.charAt(0)
  //   s1 = s1.replace(c, '')
  //   t1 = t1.replace(c, '')
  // }
  //
  // return s1.length === t1.length
}

const testCases = [
  {s: 'anagram', t: 'nagaram', expected: true},
  {s: 'car', t: 'rat', expected: false},
  {s: 'aa', t: 'bb', expected: false},
]

testCases.forEach(test => {
  const actual = isAnagram(test.s, test.t)
  assert.equal(actual, test.expected, `s: ${test.s}; t: ${test.t}; expected: ${test.expected}; actual: ${actual}`)
})
