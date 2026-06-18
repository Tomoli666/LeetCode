/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
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

    let learned = 0;
    let head = 0;

    while (head < queue.length) {
        const course = queue[head++];
        learned++;

        for (const next of graph[course]) {
            indegree[next]--;
            if (indegree[next] === 0) {
                queue.push(next);
            }
        }
    }

    return learned === numCourses;
};

// 时间复杂度：O(V + E)，V 是课程数，E 是先修关系数
// 空间复杂度：O(V + E)，邻接表和入度数组
