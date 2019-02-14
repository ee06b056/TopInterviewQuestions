/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    function mid (i, j) {
        if (i > j) return null;
        else if (i == j) return new TreeNode(nums[i]);
        else {
            let middle = i + Math.floor((j - i + 1) / 2);
            let mNode = new TreeNode(nums[middle]);
            mNode.left = mid(i, middle - 1);
            mNode.right = mid(middle + 1, j);
            return mNode;
        }
    }
    return mid(0, nums.length - 1);
};