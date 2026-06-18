/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const tails = [];

    for (const num of nums) {
        let left = 0;
        let right = tails.length;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            if (tails[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        tails[left] = num;
    }

    return tails.length;
};

// 时间复杂度：O(n log n)，每个数字二分定位
// 空间复杂度：O(n)，tails 数组保存不同长度子序列的最小尾值
