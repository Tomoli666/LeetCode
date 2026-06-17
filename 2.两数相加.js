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
    // 使用虚拟头节点，方便统一处理结果链表的拼接
    const dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    // 只要两个链表还有节点，或仍有进位，就继续相加
    while (l1 !== null || l2 !== null || carry !== 0) {
        const x = l1 !== null ? l1.val : 0;
        const y = l2 !== null ? l2.val : 0;
        const sum = x + y + carry;

        // 当前位保存个位数，十位数作为进位带到下一轮
        current.next = new ListNode(sum % 10);
        current = current.next;
        carry = Math.floor(sum / 10);

        if (l1 !== null) {
            l1 = l1.next;
        }
        if (l2 !== null) {
            l2 = l2.next;
        }
    }

    return dummy.next;
};

// 时间复杂度：O(max(m, n))，m 和 n 分别是两个链表的长度
// 空间复杂度：O(max(m, n))，结果链表需要存储每一位的和
