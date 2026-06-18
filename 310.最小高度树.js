/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if (n === 1) {
        return [0];
    }

    const graph = Array.from({ length: n }, () => []);
    const degree = Array(n).fill(0);

    for (const [a, b] of edges) {
        graph[a].push(b);
        graph[b].push(a);
        degree[a]++;
        degree[b]++;
    }

    const queue = [];
    for (let i = 0; i < n; i++) {
        if (degree[i] === 1) {
            queue.push(i);
        }
    }

    let remaining = n;
    let head = 0;

    while (remaining > 2) {
        const size = queue.length - head;
        remaining -= size;

        for (let i = 0; i < size; i++) {
            const leaf = queue[head++];

            for (const next of graph[leaf]) {
                degree[next]--;
                if (degree[next] === 1) {
                    queue.push(next);
                }
            }
        }
    }

    return queue.slice(head);
};

// 时间复杂度：O(n)，每条边和每个节点最多处理一次
// 空间复杂度：O(n)，邻接表、度数组和队列
