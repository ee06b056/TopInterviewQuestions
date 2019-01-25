/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const arr = [];
    for (let cur = head; cur != null; cur = cur.next) {
        arr.push(cur.val);
    }
    for (let i = 0; i <= arr.length / 2 - 1; i++) {
        if (arr[i] != arr[arr.length - 1 - i]) return false;
    }
    return true;
};