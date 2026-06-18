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
var deleteDuplicates = function(head) {
    let current = head;

    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            // 相同值只保留第一个节点
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head;
};

// 时间复杂度：O(n)，每个节点最多访问一次
// 空间复杂度：O(1)，原地修改链表
