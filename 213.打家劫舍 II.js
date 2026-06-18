/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }

    // 环形房屋不能同时偷第一间和最后一间
    return Math.max(
        robRange(nums, 0, nums.length - 2),
        robRange(nums, 1, nums.length - 1)
    );
};

function robRange(nums, start, end) {
    let prev2 = 0;
    let prev1 = 0;

    for (let i = start; i <= end; i++) {
        const current = Math.max(prev1, prev2 + nums[i]);
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
}

// 时间复杂度：O(n)，分别计算两段线性房屋
// 空间复杂度：O(1)，只保存前两个状态
