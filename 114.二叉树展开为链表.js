/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let current = root;

    while (current !== null) {
        if (current.left !== null) {
            let predecessor = current.left;

            while (predecessor.right !== null) {
                predecessor = predecessor.right;
            }

            predecessor.right = current.right;
            current.right = current.left;
            current.left = null;
        }

        current = current.right;
    }
};

// 时间复杂度：O(n)，每个节点最多被调整一次
// 空间复杂度：O(1)，原地展开二叉树
