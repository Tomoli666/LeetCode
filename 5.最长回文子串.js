/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let start = 0;
    let maxLength = 1;

    function expand(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }

        const length = right - left - 1;
        if (length > maxLength) {
            maxLength = length;
            start = left + 1;
        }
    }

    for (let i = 0; i < s.length; i++) {
        // 分别处理奇数长度和偶数长度的回文中心
        expand(i, i);
        expand(i, i + 1);
    }

    return s.slice(start, start + maxLength);
};

// 时间复杂度：O(n^2)，每个位置都可能向两边扩展
// 空间复杂度：O(1)，只使用常数个额外变量
