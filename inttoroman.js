const assert = require('assert')

const map = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M',
}

const getRoman = function(a, d) {
  switch (true) {
    case a < 4: return map[d].repeat(a)
    case (a === 4 || a === 5 || a === 9): return map[a * d]
    case a < 9: return map[5 * d] + map[d].repeat(a - 5)
    default: return ''
  }
}

/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function(num) {
  let s = ''
  let n = num

  for (let i = 3; i >= 0; i--) {
    let d = 10 ** i
    let w = Math.floor(n / d)

    s += getRoman(w, d)

    n = n % d

    if (i === 0) s += getRoman(n, d)
  }

  return s
}

const testCases = [
  {num: 1, expected: 'I'},
  {num: 4, expected: 'IV'},
  {num: 5, expected: 'V'},
  {num: 6, expected: 'VI'},
  {num: 8, expected: 'VIII'},
  {num: 9, expected: 'IX'},
  {num: 10, expected: 'X'},
  {num: 11, expected: 'XI'},
  {num: 1776, expected: 'MDCCLXXVI'},
  {num: 1954, expected: 'MCMLIV'},
  {num: 1990, expected: 'MCMXC'},
  {num: 2014, expected: 'MMXIV'},
]

testCases.forEach(test => {
  const actual = intToRoman(test.num)
  assert.equal(actual, test.expected, `num: ${test.num}; expected: ${test.expected}; actual: ${actual}`)
})
