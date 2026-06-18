/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const dp = Array(n).fill(1);

    for (let row = 1; row < m; row++) {
        for (let col = 1; col < n; col++) {
            dp[col] += dp[col - 1];
        }
    }

    return dp[n - 1];
};

// 时间复杂度：O(m * n)，遍历网格
// 空间复杂度：O(n)，滚动数组保存当前行路径数
