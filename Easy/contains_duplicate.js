/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const num_set= new Set();
    for (let n of nums) {
        if (num_set.has(n)) return true;
        num_set.add(n);
    }
    return false;
};