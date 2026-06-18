/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    const dummy = new ListNode(0, head);
    let groupPrev = dummy;

    while (true) {
        const kth = getKthNode(groupPrev, k);
        if (kth === null) {
            break;
        }

        const groupNext = kth.next;
        let prev = groupNext;
        let current = groupPrev.next;

        // 反转当前这一组 k 个节点
        while (current !== groupNext) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        const oldGroupHead = groupPrev.next;
        groupPrev.next = kth;
        groupPrev = oldGroupHead;
    }

    return dummy.next;
};

function getKthNode(node, k) {
    while (node !== null && k > 0) {
        node = node.next;
        k--;
    }

    return node;
}

// 时间复杂度：O(n)，每个节点最多被访问和反转常数次
// 空间复杂度：O(1)，原地修改链表指针
