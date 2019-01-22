/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let flag = 1;
    if (x < 0) flag = -1;
    x = x * flag;
    let ans = 0;
    while (x != 0) {
        const d = x % 10;
        x = Math.floor(x / 10);
        const temp = ans * 10 + d;
        if (temp > (Math.pow(2, 31) - 1)) return 0;
        ans = temp;
    }
    return ans * flag;
};