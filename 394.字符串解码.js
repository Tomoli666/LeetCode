/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const countStack = [];
    const stringStack = [];
    let current = "";
    let count = 0;

    for (const char of s) {
        if (char >= "0" && char <= "9") {
            count = count * 10 + Number(char);
        } else if (char === "[") {
            countStack.push(count);
            stringStack.push(current);
            count = 0;
            current = "";
        } else if (char === "]") {
            const repeat = countStack.pop();
            current = stringStack.pop() + current.repeat(repeat);
        } else {
            current += char;
        }
    }

    return current;
};

// 时间复杂度：O(n)，按输出规模展开字符串
// 空间复杂度：O(n)，栈保存嵌套前的字符串和次数
