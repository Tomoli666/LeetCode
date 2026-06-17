/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const result = [];

    for (let i = 0; i < values.length; i++) {
        // 从大到小贪心选择，能减就不断追加对应罗马字符
        while (num >= values[i]) {
            num -= values[i];
            result.push(symbols[i]);
        }
    }

    return result.join("");
};

// 时间复杂度：O(1)，输入范围固定，罗马符号种类固定
// 空间复杂度：O(1)，结果长度有固定上限
