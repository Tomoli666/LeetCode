/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const matrix = Array.from({ length: n }, () => Array(n).fill(0));
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;
    let value = 1;

    while (top <= bottom && left <= right) {
        for (let col = left; col <= right; col++) {
            matrix[top][col] = value++;
        }
        top++;

        for (let row = top; row <= bottom; row++) {
            matrix[row][right] = value++;
        }
        right--;

        for (let col = right; col >= left; col--) {
            matrix[bottom][col] = value++;
        }
        bottom--;

        for (let row = bottom; row >= top; row--) {
            matrix[row][left] = value++;
        }
        left++;
    }

    return matrix;
};

// 时间复杂度：O(n^2)，需要填满 n x n 矩阵
// 空间复杂度：O(1)，不计入返回矩阵
