const assert = require('assert')

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
  let r
  let d = x
  let s = 0

  while (d > 0) {
    r = d % 10
    d = Math.floor(d / 10)
    s = s * 10 + r
  }

  if (!Number.isSafeInteger(s)) return false

  return s === x
}

console.log(isPalindrome(2 ** 53 + 1))
