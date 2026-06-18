/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (const coin of coins) {
        for (let sum = coin; sum <= amount; sum++) {
            dp[sum] = Math.min(dp[sum], dp[sum - coin] + 1);
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
};

// 时间复杂度：O(amount * n)，n 是硬币种类数
// 空间复杂度：O(amount)，DP 数组保存每个金额的最少硬币数
