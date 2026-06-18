/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (head === null) {
        return null;
    }

    const map = new Map();
    let current = head;

    // 第一次遍历：复制每个节点本身
    while (current !== null) {
        map.set(current, new Node(current.val, null, null));
        current = current.next;
    }

    current = head;

    // 第二次遍历：补上 next 和 random 指针
    while (current !== null) {
        const copy = map.get(current);
        copy.next = current.next === null ? null : map.get(current.next);
        copy.random = current.random === null ? null : map.get(current.random);
        current = current.next;
    }

    return map.get(head);
};

// 时间复杂度：O(n)，遍历链表两次
// 空间复杂度：O(n)，哈希表保存原节点到新节点的映射
