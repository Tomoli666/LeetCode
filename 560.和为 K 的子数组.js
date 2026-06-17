/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    // prefixCount 记录某个前缀和出现过多少次
    const prefixCount = new Map();
    prefixCount.set(0, 1);

    let prefixSum = 0;
    let count = 0;

    for (const num of nums) {
        prefixSum += num;

        // 如果之前存在 prefixSum - k，则中间这一段子数组和为 k
        count += prefixCount.get(prefixSum - k) || 0;

        prefixCount.set(prefixSum, (prefixCount.get(prefixSum) || 0) + 1);
    }

    return count;
};

// 时间复杂度：O(n)，只遍历一次数组
// 空间复杂度：O(n)，哈希表最多记录 n 个不同前缀和
