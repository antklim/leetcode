const assert = require('assert')

const PARENTHESES_MAP = {
  '(': ')',
  '[': ']',
  '{': '}',
}

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  if (s.length % 2 !== 0) return false

  const buf = []

  for (const c of s.split('')) {
    const b = buf[buf.length - 1]

    if (!b) {
      if (!PARENTHESES_MAP[c]) return false
      buf.push(c)
    } else {
      if (PARENTHESES_MAP[c]) {
        buf.push(c)
        continue
      }

      if (c !== PARENTHESES_MAP[b]) return false
      buf.pop()
    }
  }

  return buf.length === 0
}

const testCases = [
  {s: '()', expected: true},
  {s: '(', expected: false},
  {s: '()[]{}', expected: true},
  {s: '(]', expected: false},
  {s: '([)]', expected: false},
  {s: '{[]}', expected: true},
]

testCases.forEach(test => {
  const actual = isValid(test.s)
  assert.deepEqual(actual, test.expected, `s: ${test.s}, actual: ${actual}, expected: ${test.expected}`)
})
