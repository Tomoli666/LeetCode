/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let maxArea = 0;

    function dfs(row, col) {
        if (
            row < 0 ||
            row >= rows ||
            col < 0 ||
            col >= cols ||
            grid[row][col] === 0
        ) {
            return 0;
        }

        // 标记为 0，表示这个陆地格子已经访问过
        grid[row][col] = 0;

        return 1 +
            dfs(row + 1, col) +
            dfs(row - 1, col) +
            dfs(row, col + 1) +
            dfs(row, col - 1);
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === 1) {
                maxArea = Math.max(maxArea, dfs(row, col));
            }
        }
    }

    return maxArea;
};

// 时间复杂度：O(m * n)，每个格子最多访问一次
// 空间复杂度：O(m * n)，递归栈在最坏情况下可能包含所有陆地格子
