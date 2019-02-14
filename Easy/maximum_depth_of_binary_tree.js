/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    let depth = 0;
    let queue1 = [root,], queue2 = [];
    do {
        while (queue1.length != 0) {
            let node = queue1.shift();
            if (node.left) queue2.push(node.left);
            if (node.right) queue2.push(node.right);
        }
        depth++;
        queue1 = queue2;
        queue2 = [];
    } while (queue1.length != 0);
    return depth;
};