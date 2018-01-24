const assert = require('assert')

const ListNode = function(val) {
  this.val = val
  this.next = null
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let c1 = l1
  let c2 = l2
  let head
  let current
  let mem = 0
  let l1end = l2end = false

  while (true) {
    let val1 = l1end ? 0 : c1.val
    let val2 = l2end ? 0 : c2.val
    let sum = val1 + val2 + mem

    if (sum >= 10) {
      sum -= 10
      mem = 1
    } else {
      mem = 0
    }

    if (!head) {
      head = new ListNode(sum)
      current = head
    } else {
      current.next = new ListNode(sum)
      current = current.next
    }

    l1end = c1.next === null
    l2end = c2.next === null
    if (l1end && l2end) {
      if (mem) current.next = new ListNode(mem)
      return head
    }

    if (!l1end) c1 = c1.next
    if (!l2end) c2 = c2.next
  }

};

const testCases = [
  {l1: [0], l2: [0], expected: [0]},
  {l1: [1], l2: [2], expected: [3]},
  {l1: [0], l2: [1, 8], expected: [1, 8]},
  {l1: [2, 1], l2: [3, 2], expected: [5, 3]},
  {l1: [9, 1], l2: [3, 1], expected: [2, 3]},
  {l1: [9, 9], l2: [3, 1], expected: [2, 1, 1]},
  {l1: [9, 9, 1], l2: [1, 0, 1], expected: [0, 0, 3]},
]

testCases.forEach(test => {
  let current

  const l1 = new ListNode(test.l1[0])
  current = l1

  for (let i = 1; i < test.l1.length; i++) {
    current.next = new ListNode(test.l1[i])
    current = current.next
  }

  const l2 = new ListNode(test.l2[0])
  current = l2

  for (let i = 1; i < test.l2.length; i++) {
    current.next = new ListNode(test.l2[i])
    current = current.next
  }

  const expected = new ListNode(test.expected[0])
  current = expected

  for (let i = 1; i < test.expected.length; i++) {
    current.next = new ListNode(test.expected[i])
    current = current.next
  }

  const actual = addTwoNumbers(l1, l2)
  assert.deepEqual(actual, expected, `l1: ${test.l1}; l2: ${test.l2}; expected: ${JSON.stringify(expected)}; actual: ${JSON.stringify(actual)}`)
})


/*
[2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9]
[5,6,4,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9,9,9,9]

[0,6,4,2,2,6,8,6,2,6,2,4,0,6,8,0,4,6,6,0,0,2,8,4,6,4,4,8,6,0,0,4,0,2,0,0,8,0,0,4,8,0,8,2,2,2,9,6,4,8,6,4,8,6,4,8,6,1,4,3,9,1]

expected
[7,0,8,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,1,4,3,9,1]
*/
