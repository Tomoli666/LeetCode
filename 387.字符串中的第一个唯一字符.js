/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const count = new Map();

    for (const char of s) {
        count.set(char, (count.get(char) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (count.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
};

// 时间复杂度：O(n)，遍历字符串两次
// 空间复杂度：O(1)，字符集大小有限
