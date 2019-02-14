/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length <= 1) return 0;
    let ans = 0, min = prices[0], temp_sum = 0;
    for (let i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        ans = Math.max(ans, prices[i] - min);
    }
    return ans;
};