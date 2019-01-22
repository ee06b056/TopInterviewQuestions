/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const row_sets = new Array(9);
    const column_sets = new Array(9);
    const box_sets = new Array(9);
    for (let i = 0; i < 9; i++) {
        row_sets[i] = new Set();
        column_sets[i] = new Set();
        box_sets[i] = new Set();
    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const box_index = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            const cell = board[i][j];
            if (cell != '.' && (row_sets[i].has(cell) || column_sets[j].has(cell) || box_sets[box_index].has(cell))) {
                return false;
            } else {
                row_sets[i].add(cell);
                column_sets[j].add(cell);
                box_sets[box_index].add(cell);
            }
        }
    }
    return true;
};
