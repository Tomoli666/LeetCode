/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const originalColor = image[sr][sc];

    if (originalColor === color) {
        return image;
    }

    const rows = image.length;
    const cols = image[0].length;

    function dfs(row, col) {
        if (
            row < 0 ||
            row >= rows ||
            col < 0 ||
            col >= cols ||
            image[row][col] !== originalColor
        ) {
            return;
        }

        image[row][col] = color;
        dfs(row + 1, col);
        dfs(row - 1, col);
        dfs(row, col + 1);
        dfs(row, col - 1);
    }

    dfs(sr, sc);
    return image;
};

// 时间复杂度：O(m * n)，最坏情况下访问整张图像
// 空间复杂度：O(m * n)，递归栈最坏情况下包含全部像素
