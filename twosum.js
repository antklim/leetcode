/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let search = function(nums, target, start) {
    let ai = (target >= 0)
      ? nums.findIndex((el, idx) => el <= target && idx >= start)
      : nums.findIndex((el, idx) => el >= target && idx >= start)

    if (ai < 0) return {ai: null, bi: null, start: -1}

    let b = target - nums[ai]
    let bi = nums.findIndex((el, idx) => el === b && idx > ai)
    if (bi !== -1) return {ai, bi, start: -1}

    return {ai: null, bi: null, start: ai + 1}
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
    let quit = false
    let startFrom = 0

    do {
        let {ai, bi, start} = search(nums, target, startFrom)

        if (ai !== null && bi !== null) return[ai, bi]

        startFrom = start
        quit = start < 0 || start >= nums.length - 1
    } while(!quit)

    return [null, null]
}
