/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const deque = [];
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        // 移除已经离开窗口的下标
        while (deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }

        // 保持队列中对应的值单调递减，队头就是当前窗口最大值
        while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
            deque.pop();
        }

        deque.push(i);

        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
};

// 时间复杂度：O(n)，每个下标最多入队出队一次
// 空间复杂度：O(k)，队列最多保存一个窗口内的下标
