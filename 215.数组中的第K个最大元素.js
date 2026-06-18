/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const target = nums.length - k;
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const [equalStart, equalEnd] = partition(nums, left, right);

        if (target < equalStart) {
            right = equalStart - 1;
        } else if (target > equalEnd) {
            left = equalEnd + 1;
        } else {
            return nums[target];
        }
    }
};

function partition(nums, left, right) {
    // 三路划分：把数组分成 < pivot、= pivot、> pivot 三段
    // 大量重复元素时，可以一次跳过整段相等区间，避免退化
    const randomIndex = left + Math.floor(Math.random() * (right - left + 1));
    const pivot = nums[randomIndex];
    let less = left;
    let i = left;
    let greater = right;

    while (i <= greater) {
        if (nums[i] < pivot) {
            [nums[less], nums[i]] = [nums[i], nums[less]];
            less++;
            i++;
        } else if (nums[i] > pivot) {
            [nums[i], nums[greater]] = [nums[greater], nums[i]];
            greater--;
        } else {
            i++;
        }
    }

    return [less, greater];
}

// 时间复杂度：平均 O(n)，三路划分能高效处理大量重复元素
// 空间复杂度：O(1)，原地快速选择
