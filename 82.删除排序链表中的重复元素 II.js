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
    const dummy = new ListNode(0, head);
    let prev = dummy;
    let current = head;

    while (current !== null) {
        if (current.next !== null && current.val === current.next.val) {
            const duplicateValue = current.val;

            // 跳过所有值相同的重复节点
            while (current !== null && current.val === duplicateValue) {
                current = current.next;
            }

            prev.next = current;
        } else {
            prev = current;
            current = current.next;
        }
    }

    return dummy.next;
};

// 时间复杂度：O(n)，每个节点最多访问一次
// 空间复杂度：O(1)，只使用常数个额外指针
