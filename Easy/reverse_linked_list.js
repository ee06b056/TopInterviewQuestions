/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head || !head.next) return head;
    let front = head.next, mid = head, back = null;
    do {
        mid.next = back;
        back = mid;
        mid = front;
        front = front.next;
    } while (front);
    mid.next = back;
    return mid;
};

var reverseList = function (head) {
    if (!head) return head;
    let new_head;
    function reverseListRecursive (node) {
        if (!node.next) {
            new_head = node;
            return node;
        }
        return reverseListRecursive(node.next).next = node;
    }
    reverseListRecursive(head).next = null;
    return new_head;
};

function ListNode (val) {
    this.val = val;
    this.next = null;
}

let head = new ListNode(1);
let current = head;
for (let i = 0; i < 4; i++) {
    current.next = new ListNode(i + 2);
    current = current.next;
}

console.log(reverseList(head));