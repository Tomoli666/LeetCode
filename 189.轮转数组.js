/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const n = nums.length;
    k = k % n;

    // 先整体反转，再分别反转前 k 个和后 n - k 个元素
    reverse(nums, 0, n - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, n - 1);
};

function reverse(nums, left, right) {
    while (left < right) {
        const temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        left++;
        right--;
    }
}

// 时间复杂度：O(n)，每个元素最多被反转移动常数次
// 空间复杂度：O(1)，原地修改数组
