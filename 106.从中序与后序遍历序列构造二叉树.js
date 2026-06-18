/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const indexMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        indexMap.set(inorder[i], i);
    }

    let postorderIndex = postorder.length - 1;

    function build(left, right) {
        if (left > right) {
            return null;
        }

        const rootValue = postorder[postorderIndex--];
        const root = new TreeNode(rootValue);
        const inorderIndex = indexMap.get(rootValue);

        // 后序从后往前读时，先构造右子树，再构造左子树
        root.right = build(inorderIndex + 1, right);
        root.left = build(left, inorderIndex - 1);

        return root;
    }

    return build(0, inorder.length - 1);
};

// 时间复杂度：O(n)，每个节点构造一次
// 空间复杂度：O(n)，哈希表和递归栈
