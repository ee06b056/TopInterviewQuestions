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
    let front = head;
    for (let i = 0; i < n; i++) {
        front = front.next;
    }
    if (!front) {
        head = head.next;
        return head;
    }
    let back = head;
    while (front.next != null) {
        front = front.next;
        back = back.next;
    }
    back.next = back.next.next;
    return head;
};