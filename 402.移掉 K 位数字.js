/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    const stack = [];

    for (const digit of num) {
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] > digit) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }

    while (k > 0) {
        stack.pop();
        k--;
    }

    const result = stack.join("").replace(/^0+/, "");
    return result === "" ? "0" : result;
};

// 时间复杂度：O(n)，每个数字最多入栈出栈一次
// 空间复杂度：O(n)，单调栈保存数字
