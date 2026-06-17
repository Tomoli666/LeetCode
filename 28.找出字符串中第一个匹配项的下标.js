/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const m = needle.length;
    const next = Array(m).fill(0);

    // 构建 KMP 的前缀表，next[i] 表示 needle[0..i] 的最长相等前后缀长度
    for (let i = 1, j = 0; i < m; i++) {
        while (j > 0 && needle[i] !== needle[j]) {
            j = next[j - 1];
        }

        if (needle[i] === needle[j]) {
            j++;
        }

        next[i] = j;
    }

    // 用前缀表在 haystack 中匹配 needle
    for (let i = 0, j = 0; i < haystack.length; i++) {
        while (j > 0 && haystack[i] !== needle[j]) {
            j = next[j - 1];
        }

        if (haystack[i] === needle[j]) {
            j++;
        }

        if (j === m) {
            return i - m + 1;
        }
    }

    return -1;
};

// 时间复杂度：O(n + m)，n 和 m 分别是 haystack 与 needle 的长度
// 空间复杂度：O(m)，需要保存 needle 的前缀表
