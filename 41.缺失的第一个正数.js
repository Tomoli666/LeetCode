/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const n = nums.length;

    // 把每个正整数 x 放到下标 x - 1 的位置上
    for (let i = 0; i < n; i++) {
        while (
            nums[i] >= 1 &&
            nums[i] <= n &&
            nums[nums[i] - 1] !== nums[i]
        ) {
            const targetIndex = nums[i] - 1;
            const temp = nums[i];
            nums[i] = nums[targetIndex];
            nums[targetIndex] = temp;
        }
    }

    // 第一个不满足 nums[i] === i + 1 的位置，就是缺失的最小正整数
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    return n + 1;
};

// 时间复杂度：O(n)，每个数字最多被交换到正确位置一次
// 空间复杂度：O(1)，原地调整数组
