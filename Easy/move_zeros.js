/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    function swap (i, j) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    let i = j = 0;
    while (j < nums.length) {
        if (nums[j] != 0) {
            while (i < nums.length && nums[i] != 0) {
                i++;
            }
            if (i < j) swap(i, j);
        }
        j++;
    }
};
