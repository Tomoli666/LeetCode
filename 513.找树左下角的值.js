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
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    const queue = [root];
    let head = 0;
    let answer = root.val;

    while (head < queue.length) {
        const size = queue.length - head;

        for (let i = 0; i < size; i++) {
            const node = queue[head++];

            if (i === 0) {
                answer = node.val;
            }

            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
    }

    return answer;
};

// 时间复杂度：O(n)，层序遍历所有节点
// 空间复杂度：O(n)，队列最多保存一层节点
