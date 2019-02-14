/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let ans = nums[0], temp = 0;
    for (let i = 0; i < nums.length; i++) {
        temp += nums[i];
        ans = Math.max(ans, temp);
        if (temp < 0) temp = 0;
    }
    return ans;
};