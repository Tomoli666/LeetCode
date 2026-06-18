/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const graph = new Map();

    function addEdge(from, to, weight) {
        if (!graph.has(from)) {
            graph.set(from, []);
        }
        graph.get(from).push([to, weight]);
    }

    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i];
        addEdge(a, b, values[i]);
        addEdge(b, a, 1 / values[i]);
    }

    function bfs(start, end) {
        if (!graph.has(start) || !graph.has(end)) {
            return -1.0;
        }

        const queue = [[start, 1.0]];
        const visited = new Set([start]);
        let head = 0;

        while (head < queue.length) {
            const [node, product] = queue[head++];
            if (node === end) {
                return product;
            }

            for (const [next, weight] of graph.get(node)) {
                if (!visited.has(next)) {
                    visited.add(next);
                    queue.push([next, product * weight]);
                }
            }
        }

        return -1.0;
    }

    return queries.map(([start, end]) => bfs(start, end));
};

// 时间复杂度：O(Q * (V + E))，每个查询最坏遍历整张图
// 空间复杂度：O(V + E)，图和搜索队列
