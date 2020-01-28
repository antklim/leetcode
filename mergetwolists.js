const assert = require('assert')

const arrayToList = (a) => {
  let list

  a.reduce((acc, item) => {
    const node = new ListNode(item)
    if (!acc) {
      acc = node
      list = node
    } else {
      acc.next = node
    }
    return node
  }, null)  

  return list
}

function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
  const head = new ListNode()
  let current = head
  let l1curr = l1
  let l2curr = l2

  while (l1curr && l2curr) {
    let node
    if (l1curr.val <= l2curr.val) {
      node = new ListNode(l1curr.val)
      l1curr = l1curr.next
    } else {
      node = new ListNode(l2curr.val)
      l2curr = l2curr.next
    }

    current.next = node
    current = current.next
  }

  if (l1curr) {
    current.next = l1curr
  }

  if (l2curr) {
    current.next = l2curr
  }

  return head.next
}

const testCases = [
  {l1: [1, 2, 4], l2: [1,3,4], expected: [1 , 1, 2, 3, 4, 4]},
]

testCases.forEach(test => {
  const l1 = arrayToList(test.l1)
  const l2 = arrayToList(test.l2)
  
  const actual = mergeTwoLists(l1, l2)
  assert.deepEqual(actual, arrayToList(test.expected))
})
