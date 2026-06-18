/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const stack = [];
    let number = 0;
    let sign = "+";

    for (let i = 0; i <= s.length; i++) {
        const char = i < s.length ? s[i] : "+";

        if (char === " ") {
            continue;
        }

        if (char >= "0" && char <= "9") {
            number = number * 10 + Number(char);
            continue;
        }

        if (sign === "+") {
            stack.push(number);
        } else if (sign === "-") {
            stack.push(-number);
        } else if (sign === "*") {
            stack.push(stack.pop() * number);
        } else if (sign === "/") {
            const prev = stack.pop();
            stack.push(prev < 0 ? Math.ceil(prev / number) : Math.floor(prev / number));
        }

        sign = char;
        number = 0;
    }

    return stack.reduce((sum, value) => sum + value, 0);
};

// 时间复杂度：O(n)，遍历表达式一次
// 空间复杂度：O(n)，栈保存待求和项
