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
var recoverTree = function(root) {
    let first = null;
    let second = null;
    let prev = null;

    function inorder(node) {
        if (node === null) {
            return;
        }

        inorder(node.left);

        // 中序遍历二叉搜索树应当递增，发现逆序对即可定位被交换节点
        if (prev !== null && prev.val > node.val) {
            if (first === null) {
                first = prev;
            }
            second = node;
        }

        prev = node;
        inorder(node.right);
    }

    inorder(root);
    [first.val, second.val] = [second.val, first.val];
};

// 时间复杂度：O(n)，中序遍历所有节点
// 空间复杂度：O(h)，递归栈高度为树高
