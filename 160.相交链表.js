/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let pointerA = headA;
    let pointerB = headB;

    // 两个指针分别走 A+B 和 B+A，若有交点会在交点相遇
    while (pointerA !== pointerB) {
        pointerA = pointerA === null ? headB : pointerA.next;
        pointerB = pointerB === null ? headA : pointerB.next;
    }

    return pointerA;
};

// 时间复杂度：O(m + n)，两个指针最多各走两条链表
// 空间复杂度：O(1)，只使用常数个额外指针
