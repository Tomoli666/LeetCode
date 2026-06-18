/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (head === null || head.next === null) {
        return;
    }

    // 1. 快慢指针找到链表中点
    let slow = head;
    let fast = head;
    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // 2. 反转后半段链表
    let second = reverseList(slow.next);
    slow.next = null;

    // 3. 交替合并前半段和反转后的后半段
    let first = head;
    while (second !== null) {
        const firstNext = first.next;
        const secondNext = second.next;

        first.next = second;
        second.next = firstNext;

        first = firstNext;
        second = secondNext;
    }
};

function reverseList(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}

// 时间复杂度：O(n)，找中点、反转、合并各遍历一次链表
// 空间复杂度：O(1)，原地修改链表
