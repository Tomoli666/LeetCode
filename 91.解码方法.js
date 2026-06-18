/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s.length === 0 || s[0] === "0") {
        return 0;
    }

    // prev2 表示 dp[i - 2]，prev1 表示 dp[i - 1]
    let prev2 = 1; // 空字符串有 1 种解码方式
    let prev1 = 1; // 首字符不为 0 时有 1 种解码方式

    for (let i = 1; i < s.length; i++) {
        let current = 0;

        // 单独解码当前字符，不能是 0
        if (s[i] !== "0") {
            current += prev1;
        }

        // 当前字符和前一个字符合并解码，必须在 10 到 26 之间
        const twoDigit = Number(s.slice(i - 1, i + 1));
        if (twoDigit >= 10 && twoDigit <= 26) {
            current += prev2;
        }

        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
};

// 时间复杂度：O(n)，遍历字符串一次
// 空间复杂度：O(1)，只保存前两个状态
