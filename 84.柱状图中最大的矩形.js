/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const stack = [];
    let answer = 0;

    for (let i = 0; i <= heights.length; i++) {
        const currentHeight = i === heights.length ? 0 : heights[i];

        while (stack.length > 0 && heights[stack[stack.length - 1]] > currentHeight) {
            const height = heights[stack.pop()];
            const left = stack.length === 0 ? -1 : stack[stack.length - 1];
            const width = i - left - 1;
            answer = Math.max(answer, height * width);
        }

        stack.push(i);
    }

    return answer;
};

// 时间复杂度：O(n)，每个柱子最多入栈出栈一次
// 空间复杂度：O(n)，单调栈保存下标
