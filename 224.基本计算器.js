/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const stack = [];
    let result = 0;
    let number = 0;
    let sign = 1;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char >= "0" && char <= "9") {
            number = number * 10 + Number(char);
        } else if (char === "+" || char === "-") {
            result += sign * number;
            number = 0;
            sign = char === "+" ? 1 : -1;
        } else if (char === "(") {
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
        } else if (char === ")") {
            result += sign * number;
            number = 0;
            result *= stack.pop();
            result += stack.pop();
        }
    }

    return result + sign * number;
};

// 时间复杂度：O(n)，遍历表达式一次
// 空间复杂度：O(n)，栈保存括号前的结果和符号
