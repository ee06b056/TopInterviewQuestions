/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    function swap (i1, j1, i2, j2) {
        let temp = matrix[i1][j1];
        matrix[i1][j1] = matrix[i2][j2];
        matrix[i2][j2] = temp;
    }
    const n = matrix.length;
    for (let r = 0; r <= (n / 2) - 1; r++) {
        for (let c = 0; c < n; c++) {
            swap(r, c, n - 1 - r, c);
        }
    } 
    for (let r = 0; r < n - 1; r++) {
        for (let c = r + 1; c < n; c++) {
            swap(r, c, c, r);
        }
    }
};