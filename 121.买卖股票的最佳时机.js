/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let profit = 0;

    for (const price of prices) {
        minPrice = Math.min(minPrice, price);
        profit = Math.max(profit, price - minPrice);
    }

    return profit;
};

// 时间复杂度：O(n)，遍历价格一次
// 空间复杂度：O(1)，只保存最低价和最大利润
