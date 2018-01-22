const assert = require('assert')

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let s = []
  
  if (n < 1) return s
  
  for (let i = 1; i <= n; i++) {
    switch (true) {
      case i % 15 === 0:
        s.push('FizzBuzz')
        break
      case i % 3 === 0:
        s.push('Fizz')
        break
      case i % 5 === 0:
        s.push('Buzz')
        break
      default:
        s.push(`${i}`)
        break
    }
  }
  
  return s
}

const testCases = [
  {n: 15, expected: ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz']},
]

testCases.forEach(test => {
  const actual = fizzBuzz(test.n)
  assert.deepEqual(actual, test.expected, `n: ${test.n},\nactual: ${actual},\nexpected: ${test.expected}`)
})
