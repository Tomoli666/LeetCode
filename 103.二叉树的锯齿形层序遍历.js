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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (root === null) {
        return [];
    }

    const result = [];
    const queue = [root];
    let head = 0;
    let leftToRight = true;

    while (head < queue.length) {
        const size = queue.length - head;
        const level = Array(size);

        for (let i = 0; i < size; i++) {
            const node = queue[head++];
            const index = leftToRight ? i : size - 1 - i;
            level[index] = node.val;

            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }

        result.push(level);
        leftToRight = !leftToRight;
    }

    return result;
};

// 时间复杂度：O(n)，每个节点访问一次
// 空间复杂度：O(n)，队列和每层结果数组
