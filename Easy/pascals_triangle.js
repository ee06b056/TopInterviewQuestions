/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let ans = [];
    if (numRows == 0) return ans;
    ans.push([1]);
    if (numRows == 1) return ans;
    ans.push([1,1]);
    if (numRows == 2) return ans;
        for (let i = 3; i <= numRows; i++) {
            let pre = ans[i - 2];
            let temp = [1,];
            for (let j = 0; j < pre.length - 1; j++) {
                temp.push(pre[j] + pre[j + 1]);
            }
            temp.push(1);
            ans.push(temp);
        }
        return ans;
    
};