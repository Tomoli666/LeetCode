/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length === 0) {
        return [];
    }

    // 先按区间左端点排序，重叠区间会相邻出现
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        const last = result[result.length - 1];

        if (current[0] <= last[1]) {
            // 有重叠，扩大上一个区间的右端点
            last[1] = Math.max(last[1], current[1]);
        } else {
            // 无重叠，直接加入结果
            result.push(current);
        }
    }

    return result;
};

// 时间复杂度：O(n log n)，主要来自排序
// 空间复杂度：O(log n) 或 O(n)，取决于排序实现和结果数组
