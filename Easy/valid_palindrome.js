/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let s_new = s.replace(/[^A-Za-z0\d]/g, '').toLowerCase();
    for (let i = 0; i <= (s_new.length / 2) - 1; i++) {
        if (s_new[i] != s_new[s_new.length - 1 - i]) return false;
    }
    return true;
};