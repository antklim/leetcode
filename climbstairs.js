/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
  const solutions = [0, 1, 2]

  if (n <= 2) {
    return solutions[n]
  }

  for (let i = 3; i <= n; i++) {
    solutions[0] = solutions[1]
    solutions[1] = solutions[2]
    solutions[2] = solutions[0] + solutions[1]
  }

  return solutions[2]
};