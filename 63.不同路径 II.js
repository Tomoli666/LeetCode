/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const rows = obstacleGrid.length;
    const cols = obstacleGrid[0].length;
    const dp = Array(cols).fill(0);
    dp[0] = obstacleGrid[0][0] === 1 ? 0 : 1;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (obstacleGrid[row][col] === 1) {
                dp[col] = 0;
            } else if (col > 0) {
                dp[col] += dp[col - 1];
            }
        }
    }

    return dp[cols - 1];
};

// 时间复杂度：O(m * n)，遍历网格
// 空间复杂度：O(n)，滚动数组保存当前行路径数
