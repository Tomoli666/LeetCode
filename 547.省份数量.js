/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length;
    const visited = Array(n).fill(false);
    let provinces = 0;

    function dfs(city) {
        visited[city] = true;

        for (let next = 0; next < n; next++) {
            if (isConnected[city][next] === 1 && !visited[next]) {
                dfs(next);
            }
        }
    }

    for (let city = 0; city < n; city++) {
        if (!visited[city]) {
            provinces++;
            dfs(city);
        }
    }

    return provinces;
};

// 时间复杂度：O(n^2)，需要检查邻接矩阵
// 空间复杂度：O(n)，访问数组和递归栈
