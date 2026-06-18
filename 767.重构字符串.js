/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    const n = s.length;
    const count = Array(26).fill(0);
    let maxCount = 0;
    let maxIndex = 0;

    for (const char of s) {
        const index = char.charCodeAt(0) - 97;
        count[index]++;

        if (count[index] > maxCount) {
            maxCount = count[index];
            maxIndex = index;
        }
    }

    // 如果最高频字符超过一半，必然无法避免相邻重复
    if (maxCount > Math.floor((n + 1) / 2)) {
        return "";
    }

    const result = Array(n);
    let position = 0;

    // 先把最高频字符放到偶数位置，最大程度隔开它们
    while (count[maxIndex] > 0) {
        result[position] = String.fromCharCode(maxIndex + 97);
        position += 2;
        count[maxIndex]--;
    }

    // 再把其他字符继续填入偶数位；偶数位满了就转到奇数位
    for (let i = 0; i < 26; i++) {
        while (count[i] > 0) {
            if (position >= n) {
                position = 1;
            }

            result[position] = String.fromCharCode(i + 97);
            position += 2;
            count[i]--;
        }
    }

    return result.join("");
};

// 时间复杂度：O(n + A)，A 为字符集大小 26
// 空间复杂度：O(n + A)，结果数组和计数数组
