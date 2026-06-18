/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const graph = Array.from({ length: numCourses }, () => []);
    const indegree = Array(numCourses).fill(0);

    for (const [course, prev] of prerequisites) {
        graph[prev].push(course);
        indegree[course]++;
    }

    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

    const order = [];
    let head = 0;

    while (head < queue.length) {
        const course = queue[head++];
        order.push(course);

        for (const next of graph[course]) {
            indegree[next]--;
            if (indegree[next] === 0) {
                queue.push(next);
            }
        }
    }

    return order.length === numCourses ? order : [];
};

// 时间复杂度：O(V + E)，遍历课程和先修关系
// 空间复杂度：O(V + E)，邻接表、入度数组和结果数组
