/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const count = new Map();
    for (const num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
    }

    const buckets = Array(nums.length + 1).fill(0).map(() => []);
    for (const [num, freq] of count) {
        buckets[freq].push(num);
    }

    const result = [];
    for (let freq = buckets.length - 1; freq >= 0 && result.length < k; freq--) {
        for (const num of buckets[freq]) {
            result.push(num);
            if (result.length === k) {
                break;
            }
        }
    }

    return result;
};

// 时间复杂度：O(n)，统计频率并按桶收集
// 空间复杂度：O(n)，哈希表和桶数组
