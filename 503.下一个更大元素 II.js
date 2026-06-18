/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const n = nums.length;
    const result = Array(n).fill(-1);
    const stack = [];

    for (let i = 0; i < 2 * n; i++) {
        const index = i % n;

        while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[index]) {
            result[stack.pop()] = nums[index];
        }

        if (i < n) {
            stack.push(index);
        }
    }

    return result;
};

// 时间复杂度：O(n)，循环数组等价遍历两遍
// 空间复杂度：O(n)，单调栈和结果数组
