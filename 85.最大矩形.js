/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return 0;
    }

    const cols = matrix[0].length;
    const heights = Array(cols).fill(0);
    let answer = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < cols; col++) {
            heights[col] = matrix[row][col] === "1" ? heights[col] + 1 : 0;
        }

        answer = Math.max(answer, largestRectangleArea(heights));
    }

    return answer;
};

function largestRectangleArea(heights) {
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
}

// 时间复杂度：O(m * n)，每一行都做一次柱状图计算
// 空间复杂度：O(n)，高度数组和单调栈
