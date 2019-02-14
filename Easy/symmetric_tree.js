/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true;
    let queue1 = [root, ], queue2 = [];
    let botton;
    do {
        botton = true;
        while (queue1.length != 0) {
            let node = queue1.shift();
            if (!node) {
                continue;
            } else {
                botton = false;
                queue2.push(node.left);
                queue2.push(node.right);
            }
        }
        let q2l = queue2.length;
        for (let i = 0; i < queue2.length / 2; i++) {
            if ((!queue2[i] && !queue2[q2l - 1 - i]) || (!!queue2[i] && !!queue2[q2l - 1 - i] && queue2[i].val == queue2[q2l - 1 - i].val) ) {
                continue;
            } else {
                return false;
            }
        }
        queue1 = queue2;
        queue2 = [];
    } while (!botton);
    return true;
};