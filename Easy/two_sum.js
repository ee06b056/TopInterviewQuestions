/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const num_map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (num_map.has(target - nums[i])) {
            return [i, num_map.get(target - nums[i])];
        } else {
            num_map.set(nums[i], i);
        }
    }
};