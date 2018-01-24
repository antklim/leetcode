const assert = require('assert')

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let _s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

  for (let i = 0; i < Math.floor(_s.length / 2); i++) {
    if (_s.charAt(i) !== _s.charAt(_s.length - 1 - i)) return false
  }

  return true
};

const testCases = [
  {s: 'A man, a plan, a canal: Panama', expected: true},
  {s: 'race a car', expected: false},
]

testCases.forEach(test => {
  const actual = isPalindrome(test.s)
  assert.equal(actual, test.expected, `s: ${test.s}; expected: ${test.expected}; actual: ${actual}`)
})
