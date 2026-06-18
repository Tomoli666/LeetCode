/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.heap = [];

    for (const num of nums) {
        this.add(num);
    }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.pushHeap(val);

    if (this.heap.length > this.k) {
        this.popHeap();
    }

    return this.heap[0];
};

KthLargest.prototype.pushHeap = function(value) {
    this.heap.push(value);
    let index = this.heap.length - 1;

    while (index > 0) {
        const parent = Math.floor((index - 1) / 2);

        if (this.heap[parent] <= this.heap[index]) {
            break;
        }

        [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
        index = parent;
    }
};

KthLargest.prototype.popHeap = function() {
    const top = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
        this.heap[0] = last;
        let index = 0;

        while (true) {
            let smallest = index;
            const left = index * 2 + 1;
            const right = index * 2 + 2;

            if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }

            if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (smallest === index) {
                break;
            }

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }

    return top;
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

// 时间复杂度：初始化 O(n log k)，add 为 O(log k)
// 空间复杂度：O(k)，小顶堆只保留 k 个最大元素
