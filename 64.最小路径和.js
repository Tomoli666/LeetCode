/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const dp = Array(cols).fill(Infinity);
    dp[0] = 0;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (col === 0) {
                dp[col] += grid[row][col];
            } else {
                dp[col] = Math.min(dp[col], dp[col - 1]) + grid[row][col];
            }
        }
    }

    return dp[cols - 1];
};

// 时间复杂度：O(m * n)，遍历网格
// 空间复杂度：O(n)，滚动数组保存最小路径和
