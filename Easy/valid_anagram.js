/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const m = new Map();
    for (let c of s) {
        if (m.has(c)) {
            m.set(c, m.get(c) + 1);
        } else {
            m.set(c, 1);
        }
    }
    for (let c of t) {
        if (!m.has(c)) {
            return false;
        } else if (m.get(c) == 1) {
            m.delete(c);
        } else {
            m.set(c, m.get(c) - 1);
        }
    }
    return m.size == 0;
};