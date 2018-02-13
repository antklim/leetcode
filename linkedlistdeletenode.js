/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  if (!node.next) return
  node.val = node.next.val
  node.next = node.next.next
}
