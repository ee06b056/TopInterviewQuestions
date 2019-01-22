/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    const ans = [];
    for (let i= s.length - 1; i >= 0; i--) {
        ans.push(s[i]);
    }
    return ans.join('');
};