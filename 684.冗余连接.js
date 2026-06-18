/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const parent = Array.from({ length: edges.length + 1 }, (_, index) => index);

    function find(x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }

    function union(a, b) {
        const rootA = find(a);
        const rootB = find(b);

        if (rootA === rootB) {
            return false;
        }

        parent[rootA] = rootB;
        return true;
    }

    for (const [a, b] of edges) {
        if (!union(a, b)) {
            return [a, b];
        }
    }

    return [];
};

// 时间复杂度：O(n * α(n))，并查集近似常数操作
// 空间复杂度：O(n)，父节点数组
