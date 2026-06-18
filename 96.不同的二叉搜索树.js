/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    const dp = Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;

    for (let nodes = 2; nodes <= n; nodes++) {
        for (let root = 1; root <= nodes; root++) {
            dp[nodes] += dp[root - 1] * dp[nodes - root];
        }
    }

    return dp[n];
};

// 时间复杂度：O(n^2)，枚举节点数和根节点
// 空间复杂度：O(n)，DP 数组保存每个规模的结果
