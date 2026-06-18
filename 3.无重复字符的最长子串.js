/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const lastIndex = new Map();
    let left = 0;
    let answer = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        if (lastIndex.has(char) && lastIndex.get(char) >= left) {
            left = lastIndex.get(char) + 1;
        }

        lastIndex.set(char, right);
        answer = Math.max(answer, right - left + 1);
    }

    return answer;
};

// 时间复杂度：O(n)，每个字符最多进出窗口一次
// 空间复杂度：O(m)，m 是字符集大小
