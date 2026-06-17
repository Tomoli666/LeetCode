var RecentCounter = function() {
    this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.queue.push(t);

    // 只保留 [t - 3000, t] 范围内的请求
    while (this.queue.length > 0 && this.queue[0] < t - 3000) {
        this.queue.shift();
    }

    return this.queue.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

// 时间复杂度：均摊 O(1)，每个请求最多入队出队一次
// 空间复杂度：O(n)，队列存储最近 3000ms 内的请求
