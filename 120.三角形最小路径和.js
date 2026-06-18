/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const dp = triangle[triangle.length - 1].slice();

    for (let row = triangle.length - 2; row >= 0; row--) {
        for (let col = 0; col <= row; col++) {
            dp[col] = Math.min(dp[col], dp[col + 1]) + triangle[row][col];
        }
    }

    return dp[0];
};

// 时间复杂度：O(n^2)，遍历三角形所有元素
// 空间复杂度：O(n)，滚动数组保存下一层结果
