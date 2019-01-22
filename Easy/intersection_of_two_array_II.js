/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const num1_map = new Map();
    for (let n1 of nums1) {
        if (num1_map.has(n1)) {
            num1_map.set(n1, num1_map.get(n1) + 1);
        } else {
            num1_map.set(n1, 1);
        }
    }
    const ans = [];
    for (let n2 of nums2) {
        if (num1_map.get(n2)) {
            ans.push(n2);
            num1_map.set(n2, num1_map.get(n2) - 1);
        }
    }
    return ans;
};