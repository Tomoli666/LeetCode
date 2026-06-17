/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const n = nums.length;

    // 1. 从右往左找到第一个下降位置 i，使 nums[i] < nums[i + 1]
    let i = n - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    // 2. 如果找到了 i，再从右往左找到第一个比 nums[i] 大的数并交换
    if (i >= 0) {
        let j = n - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }
        swap(nums, i, j);
    }

    // 3. i 右侧原本是降序，反转后变成最小的升序排列
    reverse(nums, i + 1, n - 1);
};

function swap(nums, left, right) {
    const temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
}

function reverse(nums, left, right) {
    while (left < right) {
        swap(nums, left, right);
        left++;
        right--;
    }
}

// 时间复杂度：O(n)，最多从右向左扫描并反转一次数组
// 空间复杂度：O(1)，只使用常数个额外变量
