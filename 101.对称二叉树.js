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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    function isMirror(left, right) {
        if (left === null || right === null) {
            return left === right;
        }

        return (
            left.val === right.val &&
            isMirror(left.left, right.right) &&
            isMirror(left.right, right.left)
        );
    }

    return isMirror(root.left, root.right);
};

// 时间复杂度：O(n)，每个节点访问一次
// 空间复杂度：O(h)，递归栈高度为树高
