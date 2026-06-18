/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (node === null) {
        return null;
    }

    const visited = new Map();

    function dfs(current) {
        if (visited.has(current)) {
            return visited.get(current);
        }

        const copy = new Node(current.val, []);
        visited.set(current, copy);

        for (const neighbor of current.neighbors) {
            copy.neighbors.push(dfs(neighbor));
        }

        return copy;
    }

    return dfs(node);
};

// 时间复杂度：O(V + E)，每个节点和每条边都访问一次
// 空间复杂度：O(V)，哈希表和递归栈存储节点
