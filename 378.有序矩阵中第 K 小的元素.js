/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    const n = matrix.length;
    let left = matrix[0][0];
    let right = matrix[n - 1][n - 1];

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (countLessOrEqual(matrix, mid) >= k) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};

function countLessOrEqual(matrix, target) {
    const n = matrix.length;
    let row = n - 1;
    let col = 0;
    let count = 0;

    while (row >= 0 && col < n) {
        if (matrix[row][col] <= target) {
            count += row + 1;
            col++;
        } else {
            row--;
        }
    }

    return count;
}

// 时间复杂度：O(n log(max-min))，对值域二分，每次 O(n) 计数
// 空间复杂度：O(1)，只使用常数个额外变量
