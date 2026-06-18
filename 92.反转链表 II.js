/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    const dummy = new ListNode(0, head);
    let prev = dummy;

    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }

    // 头插法：每次把 current 后面的节点插到反转区间最前面
    let current = prev.next;
    for (let i = 0; i < right - left; i++) {
        const next = current.next;
        current.next = next.next;
        next.next = prev.next;
        prev.next = next;
    }

    return dummy.next;
};

// 时间复杂度：O(n)，最多遍历链表一次
// 空间复杂度：O(1)，原地修改链表指针
