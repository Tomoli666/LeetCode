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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const result = [];

    function dfs(node, path) {
        if (node === null) {
            return;
        }

        const currentPath = path.length === 0 ? String(node.val) : path + "->" + node.val;

        if (node.left === null && node.right === null) {
            result.push(currentPath);
            return;
        }

        dfs(node.left, currentPath);
        dfs(node.right, currentPath);
    }

    dfs(root, "");
    return result;
};

// 时间复杂度：O(n * h)，路径字符串拼接与树高有关
// 空间复杂度：O(n * h)，结果数组保存所有路径
