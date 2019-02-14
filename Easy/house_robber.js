/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let ans = 0;
    const dp = (new Array(nums.length + 2)).fill(0);
    for (let i = 2; i < dp.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 2]);
        ans = Math.max(ans, dp[i]);
    }
    return ans;
};