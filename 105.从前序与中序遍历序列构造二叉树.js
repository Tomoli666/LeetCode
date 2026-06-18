/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const indexMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        indexMap.set(inorder[i], i);
    }

    let preorderIndex = 0;

    function build(left, right) {
        if (left > right) {
            return null;
        }

        const rootValue = preorder[preorderIndex++];
        const root = new TreeNode(rootValue);
        const inorderIndex = indexMap.get(rootValue);

        root.left = build(left, inorderIndex - 1);
        root.right = build(inorderIndex + 1, right);

        return root;
    }

    return build(0, inorder.length - 1);
};

// 时间复杂度：O(n)，每个节点构造一次
// 空间复杂度：O(n)，哈希表和递归栈
