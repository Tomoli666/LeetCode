/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {
    const n = nums.length;
    const prefix = Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    const deque = [];
    let answer = Infinity;

    for (let i = 0; i <= n; i++) {
        // 当前前缀和减去队头前缀和 >= k，说明找到一个可行子数组
        while (deque.length > 0 && prefix[i] - prefix[deque[0]] >= k) {
            answer = Math.min(answer, i - deque.shift());
        }

        // 保持前缀和单调递增，较大的旧前缀和没有保留价值
        while (deque.length > 0 && prefix[deque[deque.length - 1]] >= prefix[i]) {
            deque.pop();
        }

        deque.push(i);
    }

    return answer === Infinity ? -1 : answer;
};

// 时间复杂度：O(n)，每个前缀下标最多入队出队一次
// 空间复杂度：O(n)，前缀和数组和单调队列
