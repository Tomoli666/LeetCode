/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const dp = Array(cols + 1).fill(0);
    let maxSide = 0;

    for (let row = 1; row <= rows; row++) {
        let prevDiagonal = 0;

        for (let col = 1; col <= cols; col++) {
            const temp = dp[col];

            if (matrix[row - 1][col - 1] === "1") {
                dp[col] = Math.min(dp[col], dp[col - 1], prevDiagonal) + 1;
                maxSide = Math.max(maxSide, dp[col]);
            } else {
                dp[col] = 0;
            }

            prevDiagonal = temp;
        }
    }

    return maxSide * maxSide;
};

// 时间复杂度：O(m * n)，遍历矩阵
// 空间复杂度：O(n)，滚动数组保存上一行状态
