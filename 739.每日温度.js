/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const result = Array(temperatures.length).fill(0);
    const stack = [];

    for (let i = 0; i < temperatures.length; i++) {
        while (
            stack.length > 0 &&
            temperatures[i] > temperatures[stack[stack.length - 1]]
        ) {
            const prevIndex = stack.pop();
            result[prevIndex] = i - prevIndex;
        }

        stack.push(i);
    }

    return result;
};

// 时间复杂度：O(n)，每个下标最多入栈出栈一次
// 空间复杂度：O(n)，单调栈保存下标
