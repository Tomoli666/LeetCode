/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const dp = Array(n + 1).fill(Infinity);
    dp[0] = 0;

    for (let square = 1; square * square <= n; square++) {
        const value = square * square;

        for (let sum = value; sum <= n; sum++) {
            dp[sum] = Math.min(dp[sum], dp[sum - value] + 1);
        }
    }

    return dp[n];
};

// 时间复杂度：O(n * sqrt(n))，枚举平方数和目标和
// 空间复杂度：O(n)，DP 数组保存每个和的最少数量
