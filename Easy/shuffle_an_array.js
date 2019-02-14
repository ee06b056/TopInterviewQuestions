/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.original = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.original;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    function swap (i, j) {
        if (i == j) return;
        let temp = shuffle[i];
        shuffle[i] = shuffle[j];
        shuffle[j] = temp;
    }
    let shuffle = this.original.slice();
    for (let i = shuffle.length - 1; i > 0; i--) {
        let t = Math.floor(Math.random() * (i + 1));
        swap(t, i);
    }
    return shuffle;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */