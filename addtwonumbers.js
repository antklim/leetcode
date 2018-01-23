const assert = require('assert')

const ListNode = function(val) {
  this.val = val
  this.next = null
}

const listToNumber = (list) => {
  let n = 0
  let i = 0
  let el = list

  while (true) {
    let val = el.val
    n = n + val * 10 ** i

    if (!el.next) return n

    el = el.next
    i++
  }
}

const testCases = [
  {l: [2, 4, 3], expected: 342},
  {l: [0], expected: 0},
]

testCases.forEach(test => {
  const list = new ListNode(test.l[0])
  let current = list

  for (let i = 1; i < test.l.length; i++) {
    current.next = new ListNode(test.l[i])
    current = current.next
  }

  const actual = listToNumber(list)
  assert.equal(actual, test.expected, `l: ${test.l}; list: ${JSON.stringify(list)}; expected: ${test.expected}; actual: ${actual}`)
})

const numberToList = (num) => {
  if (num < 10) return new ListNode(num)

  let d = num
  let head
  let current

  while (d > 0) {
    r = d % 10
    d = Math.floor(d / 10)

    if (!head) {
      head = new ListNode(r)
      current = head
    } else {
      current.next = new ListNode(r)
      current = current.next
    }
  }

  return head
}

const head = new ListNode(2)
const next1 = new ListNode(4)
next1.next = new ListNode(3)
head.next = next1

const actual = numberToList(342)
assert.deepEqual(actual, head, `actual: ${JSON.stringify(actual)}, expected: ${JSON.stringify(head)}`)

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
  const num1 = listToNumber(l1)
  const num2 = listToNumber(l2)
  return numberToList(num1 + num2)
};



/***
[2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9]
[5,6,4,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9,9,9,9]

[0,6,4,2,2,6,8,6,2,6,2,4,0,6,8,0,4,6,6,0,0,2,8,4,6,4,4,8,6,0,0,4,0,2,0,0,8,0,0,4,8,0,8,2,2,2,9,6,4,8,6,4,8,6,4,8,6,1,4,3,9,1]

expected
[7,0,8,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,1,4,3,9,1]
