/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 哈希表记录：数字 -> 该数字出现的位置
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const need = target - nums[i];

        // 如果之前见过 need，那么 need + 当前数字 = target
        if (map.has(need)) {
            return [map.get(need), i];
        }

        // 当前数字留给后面的元素匹配
        map.set(nums[i], i);
    }

    return [];
};

// 时间复杂度：O(n)，每个元素最多遍历一次
// 空间复杂度：O(n)，哈希表最多存储 n 个元素
