/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let target = nums.length * (1 + nums.length) / 2;
    let sum = 0;
    nums.forEach((e) => {sum += e;});
    return target - sum;
};