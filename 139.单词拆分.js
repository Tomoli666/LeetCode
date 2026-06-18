/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const wordSet = new Set(wordDict);
    const dp = Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordSet.has(s.slice(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length];
};

// 时间复杂度：O(n^2 * L)，L 为切片字符串长度成本
// 空间复杂度：O(n + m)，DP 数组和词典集合
