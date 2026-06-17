/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let firstRowHasZero = false;
    let firstColHasZero = false;

    for (let col = 0; col < cols; col++) {
        if (matrix[0][col] === 0) {
            firstRowHasZero = true;
            break;
        }
    }

    for (let row = 0; row < rows; row++) {
        if (matrix[row][0] === 0) {
            firstColHasZero = true;
            break;
        }
    }

    // 用第一行和第一列作为标记数组
    for (let row = 1; row < rows; row++) {
        for (let col = 1; col < cols; col++) {
            if (matrix[row][col] === 0) {
                matrix[row][0] = 0;
                matrix[0][col] = 0;
            }
        }
    }

    for (let row = 1; row < rows; row++) {
        for (let col = 1; col < cols; col++) {
            if (matrix[row][0] === 0 || matrix[0][col] === 0) {
                matrix[row][col] = 0;
            }
        }
    }

    if (firstRowHasZero) {
        for (let col = 0; col < cols; col++) {
            matrix[0][col] = 0;
        }
    }

    if (firstColHasZero) {
        for (let row = 0; row < rows; row++) {
            matrix[row][0] = 0;
        }
    }
};

// 时间复杂度：O(m * n)，遍历矩阵常数次
// 空间复杂度：O(1)，使用第一行和第一列做标记
