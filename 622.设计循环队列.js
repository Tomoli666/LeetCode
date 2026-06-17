/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    // 多开一个位置，用 front === rear 表示空，用 (rear + 1) % capacity === front 表示满
    this.capacity = k + 1;
    this.queue = Array(this.capacity).fill(0);
    this.front = 0;
    this.rear = 0;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) {
        return false;
    }

    this.queue[this.rear] = value;
    this.rear = (this.rear + 1) % this.capacity;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) {
        return false;
    }

    this.front = (this.front + 1) % this.capacity;
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    return this.isEmpty() ? -1 : this.queue[this.front];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (this.isEmpty()) {
        return -1;
    }

    return this.queue[(this.rear - 1 + this.capacity) % this.capacity];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.front === this.rear;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return (this.rear + 1) % this.capacity === this.front;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

// 时间复杂度：所有操作均为 O(1)
// 空间复杂度：O(k)，数组存储循环队列
