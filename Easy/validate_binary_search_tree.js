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
var isValidBST = function(root) {
    if (!root) return true;
    let valid = true;
    let pre_num = null;
    function inorder (root) {
        if (!valid) return ;
        if (root.left) inorder(root.left);
        console.log('pre_num', pre_num, 'root.val', root.val);
        if (pre_num == null || pre_num < root.val) {
            pre_num = root.val;
        } else {
            valid = false;
            return ;
        }
        if (root.right) inorder(root.right);
    }
    inorder(root);
    return valid;
};