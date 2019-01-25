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
var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    let head = null;
    if (l1.val <= l2.val) {
        head = l1;
        l1 = l1.next;
    } else {
        head = l2;
        l2 = l2.next;
    }
    let cur = head;
    while (!!l1 && !!l2) {
        if (l1.val <= l2.val) {
            cur.next = l1;
            l1 = l1.next;
            cur = cur.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
            cur = cur.next;
        }
    }
    cur.next = !!l1 ? l1 : l2;
    return head;
};