/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxHere = nums[0];
    let minHere = nums[0];
    let answer = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];

        // 负数会让最大值和最小值交换角色
        if (num < 0) {
            [maxHere, minHere] = [minHere, maxHere];
        }

        maxHere = Math.max(num, maxHere * num);
        minHere = Math.min(num, minHere * num);
        answer = Math.max(answer, maxHere);
    }

    return answer;
};

// 时间复杂度：O(n)，遍历数组一次
// 空间复杂度：O(1)，只保存当前最大/最小乘积
