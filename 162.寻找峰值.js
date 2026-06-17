/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[mid + 1]) {
            // 下降方向左侧一定存在峰值，mid 也可能是峰值
            right = mid;
        } else {
            // 上升方向右侧一定存在峰值
            left = mid + 1;
        }
    }

    return left;
};

// 时间复杂度：O(log n)，二分缩小峰值所在区间
// 空间复杂度：O(1)，只使用常数个额外变量
