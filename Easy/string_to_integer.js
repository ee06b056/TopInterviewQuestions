/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const INT_MIN = Math.pow(-2, 31), INT_MAX = Math.pow(2, 31) - 1;
    let ans = parseInt(str);
    if (isNaN(ans)) return 0;
    else if (ans > INT_MAX) return INT_MAX;
    else if (ans < INT_MIN) return INT_MIN;
    else return ans;
};