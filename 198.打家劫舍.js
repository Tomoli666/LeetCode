/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let prev2 = 0;
    let prev1 = 0;

    for (const money of nums) {
        const current = Math.max(prev1, prev2 + money);
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
};

// 时间复杂度：O(n)，遍历房屋一次
// 空间复杂度：O(1)，只保存前两个状态
