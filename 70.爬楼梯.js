/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) {
        return n;
    }

    let prev2 = 1;
    let prev1 = 2;

    for (let i = 3; i <= n; i++) {
        const current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
};

// 时间复杂度：O(n)，从 3 计算到 n
// 空间复杂度：O(1)，只保存前两项
