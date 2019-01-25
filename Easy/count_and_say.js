/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    function sigleCountAndSay (s) {
        let ans = '';
        let char = s[0], count = 1;
        for (let i = 1; i < s.length; i++) {
            if (s[i] == char) {
                count++;
            } else {
                ans = ans + count + char;
                char = s[i];
                count = 1;
            }
        }
        ans = ans + count + char;
        return ans;
    }
    let s = '1';
    for (let i = 1; i < n; i++) {
        s = sigleCountAndSay(s);
    }
    return s;
};