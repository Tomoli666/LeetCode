/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length;

    // 先沿主对角线翻转，再逐行左右翻转，即可顺时针旋转 90 度
    for (let row = 0; row < n; row++) {
        for (let col = row + 1; col < n; col++) {
            const temp = matrix[row][col];
            matrix[row][col] = matrix[col][row];
            matrix[col][row] = temp;
        }
    }

    for (let row = 0; row < n; row++) {
        let left = 0;
        let right = n - 1;

        while (left < right) {
            const temp = matrix[row][left];
            matrix[row][left] = matrix[row][right];
            matrix[row][right] = temp;
            left++;
            right--;
        }
    }
};

// 时间复杂度：O(n^2)，需要访问矩阵中的元素
// 空间复杂度：O(1)，原地旋转矩阵
