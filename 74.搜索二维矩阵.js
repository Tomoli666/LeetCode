/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let left = 0;
    let right = rows * cols - 1;

    // 把二维矩阵看成一个有序的一维数组来二分
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const value = matrix[Math.floor(mid / cols)][mid % cols];

        if (value === target) {
            return true;
        }

        if (value < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
};

// 时间复杂度：O(log(m * n))，二分搜索全部元素
// 空间复杂度：O(1)，只使用常数个额外变量
