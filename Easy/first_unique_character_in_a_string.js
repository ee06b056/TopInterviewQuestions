/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const s_map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (!s_map.has(s[i])) {
            s_map.set(s[i], [i,]);
        } else {
            s_map.get(s[i]).push(i);
        }
    }
    let iterator = s_map.entries();
    let value;
    while (value = iterator.next().value) {
        if (value[1].length == 1) return value[1][0];
    }
    return -1;
};