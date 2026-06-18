/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    const n = graph.length;
    const color = Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        if (color[i] !== 0) {
            continue;
        }

        const queue = [i];
        color[i] = 1;
        let head = 0;

        while (head < queue.length) {
            const node = queue[head++];

            for (const next of graph[node]) {
                if (color[next] === 0) {
                    color[next] = -color[node];
                    queue.push(next);
                } else if (color[next] === color[node]) {
                    return false;
                }
            }
        }
    }

    return true;
};

// 时间复杂度：O(V + E)，遍历所有节点和边
// 空间复杂度：O(V)，颜色数组和队列
