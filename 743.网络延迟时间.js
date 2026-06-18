/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const graph = Array.from({ length: n + 1 }, () => []);

    for (const [from, to, weight] of times) {
        graph[from].push([to, weight]);
    }

    const dist = Array(n + 1).fill(Infinity);
    dist[k] = 0;

    const heap = [];

    function push(value) {
        heap.push(value);
        let index = heap.length - 1;

        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);

            if (heap[parent][1] <= heap[index][1]) {
                break;
            }

            [heap[parent], heap[index]] = [heap[index], heap[parent]];
            index = parent;
        }
    }

    function pop() {
        const top = heap[0];
        const last = heap.pop();

        if (heap.length > 0) {
            heap[0] = last;
            let index = 0;

            while (true) {
                let smallest = index;
                const left = index * 2 + 1;
                const right = index * 2 + 2;

                if (left < heap.length && heap[left][1] < heap[smallest][1]) {
                    smallest = left;
                }

                if (right < heap.length && heap[right][1] < heap[smallest][1]) {
                    smallest = right;
                }

                if (smallest === index) {
                    break;
                }

                [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
                index = smallest;
            }
        }

        return top;
    }

    push([k, 0]);

    while (heap.length > 0) {
        const [node, distance] = pop();

        if (distance > dist[node]) {
            continue;
        }

        for (const [next, weight] of graph[node]) {
            const nextDistance = distance + weight;

            if (nextDistance < dist[next]) {
                dist[next] = nextDistance;
                push([next, nextDistance]);
            }
        }
    }

    let answer = 0;

    for (let i = 1; i <= n; i++) {
        answer = Math.max(answer, dist[i]);
    }

    return answer === Infinity ? -1 : answer;
};

// 时间复杂度：O((V + E) log V)，Dijkstra 使用小顶堆
// 空间复杂度：O(V + E)，邻接表、距离数组和堆
