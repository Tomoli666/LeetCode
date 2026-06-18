/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    const values = [];

    while (head !== null) {
        values.push(head.val);
        head = head.next;
    }

    function build(left, right) {
        if (left > right) {
            return null;
        }

        const mid = Math.floor((left + right) / 2);
        const root = new TreeNode(values[mid]);
        root.left = build(left, mid - 1);
        root.right = build(mid + 1, right);

        return root;
    }

    return build(0, values.length - 1);
};

// 时间复杂度：O(n)，遍历链表并构造树
// 空间复杂度：O(n)，数组保存链表值
