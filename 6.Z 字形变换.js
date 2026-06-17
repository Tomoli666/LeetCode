/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    const rows = Array.from({ length: numRows }, () => []);
    let currentRow = 0;
    let direction = 1;

    for (const char of s) {
        rows[currentRow].push(char);

        // 到达第一行或最后一行时，改变移动方向
        if (currentRow === 0) {
            direction = 1;
        } else if (currentRow === numRows - 1) {
            direction = -1;
        }

        currentRow += direction;
    }

    return rows.map(row => row.join("")).join("");
};

// 时间复杂度：O(n)，n 是字符串长度
// 空间复杂度：O(n)，需要保存每一行的字符
