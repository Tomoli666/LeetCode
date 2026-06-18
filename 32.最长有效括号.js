/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const stack = [-1];
    let answer = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(i);
        } else {
            stack.pop();

            if (stack.length === 0) {
                // 当前右括号无法匹配，作为新的边界
                stack.push(i);
            } else {
                answer = Math.max(answer, i - stack[stack.length - 1]);
            }
        }
    }

    return answer;
};

// 时间复杂度：O(n)，遍历字符串一次
// 空间复杂度：O(n)，栈保存下标
