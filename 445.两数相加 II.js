/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const stack1 = [];
    const stack2 = [];

    while (l1 !== null) {
        stack1.push(l1.val);
        l1 = l1.next;
    }

    while (l2 !== null) {
        stack2.push(l2.val);
        l2 = l2.next;
    }

    let carry = 0;
    let head = null;

    while (stack1.length > 0 || stack2.length > 0 || carry !== 0) {
        const x = stack1.length > 0 ? stack1.pop() : 0;
        const y = stack2.length > 0 ? stack2.pop() : 0;
        const sum = x + y + carry;

        // 头插法构造结果链表
        head = new ListNode(sum % 10, head);
        carry = Math.floor(sum / 10);
    }

    return head;
};

// 时间复杂度：O(m + n)，遍历两个链表并弹出栈
// 空间复杂度：O(m + n)，两个栈存储链表数字
