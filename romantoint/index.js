const assert = require('assert')

const map = {
  I: 1,
  V: 5,
  IV: 4,
  IX: 9,

  X: 10,
  L: 50,
  XL: 40,
  XC: 90,

  C: 100,
  D: 500,
  M: 1000,
  CD: 400,
  CM: 900,
}

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
  let year = 0
  let i = 0

  while (i < s.length) {
    let doubles = s.substring(i, i + 2)

    if (doubles.length === 2 && map[doubles]) {
      year += map[doubles]
      i += 2
    } else {
      year += map[s[i]]
      i += 1
    }
  }

  return year
}

const testCases = [
  {s: 'I', expected: 1},
  {s: 'IV', expected: 4},
  {s: 'V', expected: 5},
  {s: 'VI', expected: 6},
  {s: 'VIII', expected: 8},
  {s: 'IX', expected: 9},
  {s: 'X', expected: 10},
  {s: 'XI', expected: 11},
  {s: 'MDCCLXXVI', expected: 1776},
  {s: 'MCMLIV', expected: 1954},
  {s: 'MCMXC', expected: 1990},
  {s: 'MMXIV', expected: 2014},
]

testCases.forEach(test => {
  const actual = romanToInt(test.s)
  assert.equal(actual, test.expected, `s: ${test.s}; expected: ${test.expected}; actual: ${actual}`)
})
