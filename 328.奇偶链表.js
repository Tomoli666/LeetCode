/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (head === null) {
        return null;
    }

    let odd = head;
    let even = head.next;
    const evenHead = even;

    // odd 串联奇数位置节点，even 串联偶数位置节点
    while (even !== null && even.next !== null) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }

    odd.next = evenHead;
    return head;
};

// 时间复杂度：O(n)，遍历链表一次
// 空间复杂度：O(1)，原地调整指针
