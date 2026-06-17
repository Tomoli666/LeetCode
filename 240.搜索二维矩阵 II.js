/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let row = 0;
    let col = matrix[0].length - 1;

    // 从右上角出发：当前值大了就左移，小了就下移
    while (row < matrix.length && col >= 0) {
        const value = matrix[row][col];

        if (value === target) {
            return true;
        }

        if (value > target) {
            col--;
        } else {
            row++;
        }
    }

    return false;
};

// 时间复杂度：O(m + n)，每次排除一行或一列
// 空间复杂度：O(1)，只使用常数个额外变量
