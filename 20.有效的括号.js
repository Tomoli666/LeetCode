/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const pairs = new Map([
        [")", "("],
        ["]", "["],
        ["}", "{"]
    ]);

    for (const char of s) {
        if (!pairs.has(char)) {
            stack.push(char);
        } else if (stack.pop() !== pairs.get(char)) {
            return false;
        }
    }

    return stack.length === 0;
};

// 时间复杂度：O(n)，遍历字符串一次
// 空间复杂度：O(n)，栈最多保存所有左括号
