/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    const seen = new Set();
    const repeated = new Set();

    for (let i = 0; i + 10 <= s.length; i++) {
        const sequence = s.slice(i, i + 10);

        if (seen.has(sequence)) {
            repeated.add(sequence);
        } else {
            seen.add(sequence);
        }
    }

    return Array.from(repeated);
};

// 时间复杂度：O(n)，滑动检查所有长度为 10 的子串
// 空间复杂度：O(n)，集合保存出现过的序列
