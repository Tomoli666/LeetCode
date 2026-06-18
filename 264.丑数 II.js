/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    const dp = Array(n).fill(1);
    let p2 = 0;
    let p3 = 0;
    let p5 = 0;

    for (let i = 1; i < n; i++) {
        const next2 = dp[p2] * 2;
        const next3 = dp[p3] * 3;
        const next5 = dp[p5] * 5;
        const next = Math.min(next2, next3, next5);

        dp[i] = next;

        if (next === next2) {
            p2++;
        }
        if (next === next3) {
            p3++;
        }
        if (next === next5) {
            p5++;
        }
    }

    return dp[n - 1];
};

// 时间复杂度：O(n)，依次生成前 n 个丑数
// 空间复杂度：O(n)，动态规划数组保存丑数序列
