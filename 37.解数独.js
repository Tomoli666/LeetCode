/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());
    const emptyCells = [];

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const value = board[row][col];
            const boxIndex = getBoxIndex(row, col);

            if (value === ".") {
                emptyCells.push([row, col]);
            } else {
                rows[row].add(value);
                cols[col].add(value);
                boxes[boxIndex].add(value);
            }
        }
    }

    function backtrack(index) {
        if (index === emptyCells.length) {
            return true;
        }

        const [row, col] = emptyCells[index];
        const boxIndex = getBoxIndex(row, col);

        for (let num = 1; num <= 9; num++) {
            const value = String(num);

            if (rows[row].has(value) || cols[col].has(value) || boxes[boxIndex].has(value)) {
                continue;
            }

            board[row][col] = value;
            rows[row].add(value);
            cols[col].add(value);
            boxes[boxIndex].add(value);

            if (backtrack(index + 1)) {
                return true;
            }

            board[row][col] = ".";
            rows[row].delete(value);
            cols[col].delete(value);
            boxes[boxIndex].delete(value);
        }

        return false;
    }

    backtrack(0);
};

function getBoxIndex(row, col) {
    return Math.floor(row / 3) * 3 + Math.floor(col / 3);
}

// 时间复杂度：O(9^m)，m 是空格数量，回溯最坏尝试每种数字
// 空间复杂度：O(m)，递归栈深度最多为 m
