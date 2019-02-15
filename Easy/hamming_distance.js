/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let a = x ^ y;
    let ans = 0;
    while (a != 0) {
        console.log(a);
        ans += (a & 1);
        a >>>= 1;
    }
    return ans;
};