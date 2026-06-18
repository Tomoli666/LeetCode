/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    const smallDummy = new ListNode(0);
    const largeDummy = new ListNode(0);
    let small = smallDummy;
    let large = largeDummy;

    while (head !== null) {
        if (head.val < x) {
            small.next = head;
            small = small.next;
        } else {
            large.next = head;
            large = large.next;
        }

        head = head.next;
    }

    // 断开大链表尾部，避免形成旧链表中的环或多余连接
    large.next = null;
    small.next = largeDummy.next;

    return smallDummy.next;
};

// 时间复杂度：O(n)，遍历链表一次
// 空间复杂度：O(1)，只使用常数个额外节点和指针
