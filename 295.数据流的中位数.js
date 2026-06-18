var MedianFinder = function() {
    // small 是大顶堆，保存较小的一半；large 是小顶堆，保存较大的一半
    this.small = [];
    this.large = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (this.small.length === 0 || num <= this.small[0]) {
        this.pushHeap(this.small, num, true);
    } else {
        this.pushHeap(this.large, num, false);
    }

    // 保持 small 的数量等于 large，或只比 large 多 1
    if (this.small.length > this.large.length + 1) {
        this.pushHeap(this.large, this.popHeap(this.small, true), false);
    } else if (this.large.length > this.small.length) {
        this.pushHeap(this.small, this.popHeap(this.large, false), true);
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.small.length > this.large.length) {
        return this.small[0];
    }

    return (this.small[0] + this.large[0]) / 2;
};

MedianFinder.prototype.pushHeap = function(heap, value, isMaxHeap) {
    heap.push(value);
    let index = heap.length - 1;

    while (index > 0) {
        const parent = Math.floor((index - 1) / 2);

        if (this.inCorrectOrder(heap[parent], heap[index], isMaxHeap)) {
            break;
        }

        [heap[parent], heap[index]] = [heap[index], heap[parent]];
        index = parent;
    }
};

MedianFinder.prototype.popHeap = function(heap, isMaxHeap) {
    const top = heap[0];
    const last = heap.pop();

    if (heap.length > 0) {
        heap[0] = last;
        let index = 0;

        while (true) {
            let best = index;
            const left = index * 2 + 1;
            const right = index * 2 + 2;

            if (
                left < heap.length &&
                !this.inCorrectOrder(heap[best], heap[left], isMaxHeap)
            ) {
                best = left;
            }

            if (
                right < heap.length &&
                !this.inCorrectOrder(heap[best], heap[right], isMaxHeap)
            ) {
                best = right;
            }

            if (best === index) {
                break;
            }

            [heap[index], heap[best]] = [heap[best], heap[index]];
            index = best;
        }
    }

    return top;
};

MedianFinder.prototype.inCorrectOrder = function(parent, child, isMaxHeap) {
    return isMaxHeap ? parent >= child : parent <= child;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

// 时间复杂度：addNum 为 O(log n)，findMedian 为 O(1)
// 空间复杂度：O(n)，两个堆保存所有数字
