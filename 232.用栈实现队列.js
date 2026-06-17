var MyQueue = function() {
    // inStack 负责入队，outStack 负责出队
    this.inStack = [];
    this.outStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.inStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    this.moveToOutStack();
    return this.outStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    this.moveToOutStack();
    return this.outStack[this.outStack.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.inStack.length === 0 && this.outStack.length === 0;
};

MyQueue.prototype.moveToOutStack = function() {
    if (this.outStack.length === 0) {
        while (this.inStack.length > 0) {
            this.outStack.push(this.inStack.pop());
        }
    }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// 时间复杂度：均摊 O(1)，每个元素最多进出栈各一次
// 空间复杂度：O(n)，两个栈存储队列元素
