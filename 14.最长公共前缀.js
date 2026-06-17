/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        // 不断缩短 prefix，直到它成为当前字符串的前缀
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.slice(0, prefix.length - 1);

            if (prefix.length === 0) {
                return "";
            }
        }
    }

    return prefix;
};

// 时间复杂度：O(S)，S 是所有字符串字符总数
// 空间复杂度：O(1)，只使用少量额外变量
