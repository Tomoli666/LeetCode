/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const value = board[row][col];

            if (value === ".") {
                continue;
            }

            const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);

            // 同一行、同一列或同一个 3x3 宫内不能出现重复数字
            if (rows[row].has(value) || cols[col].has(value) || boxes[boxIndex].has(value)) {
                return false;
            }

            rows[row].add(value);
            cols[col].add(value);
            boxes[boxIndex].add(value);
        }
    }

    return true;
};

// 时间复杂度：O(1)，棋盘固定为 9x9
// 空间复杂度：O(1)，额外集合数量固定
