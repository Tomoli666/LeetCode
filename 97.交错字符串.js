/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    const m = s1.length;
    const n = s2.length;

    if (m + n !== s3.length) {
        return false;
    }

    const dp = Array(n + 1).fill(false);
    dp[0] = true;

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            const index = i + j - 1;

            if (i > 0) {
                dp[j] = dp[j] && s1[i - 1] === s3[index];
            }
            if (j > 0) {
                dp[j] = dp[j] || (dp[j - 1] && s2[j - 1] === s3[index]);
            }
        }
    }

    return dp[n];
};

// 时间复杂度：O(m * n)，计算所有交错状态
// 空间复杂度：O(n)，滚动数组保存状态
