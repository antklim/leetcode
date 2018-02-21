/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let curr = head
  let nodes = []

  while (curr) {
    nodes.push(curr)
    curr = curr.next
  }

  const idx = nodes.length - n
  if (idx === 0) {
    head = head.next
  } else if (idx > 0) {
    nodes[idx - 1].next = nodes[idx].next
  }
  return head
};
