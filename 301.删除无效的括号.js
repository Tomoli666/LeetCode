/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    const result = [];
    const visited = new Set([s]);
    const queue = [s];
    let head = 0;
    let found = false;

    function isValid(str) {
        let balance = 0;

        for (const char of str) {
            if (char === "(") {
                balance++;
            } else if (char === ")") {
                balance--;
                if (balance < 0) {
                    return false;
                }
            }
        }

        return balance === 0;
    }

    while (head < queue.length) {
        const current = queue[head++];

        if (isValid(current)) {
            result.push(current);
            found = true;
        }

        // 找到当前层的合法结果后，不再生成下一层，保证删除数量最少
        if (found) {
            continue;
        }

        for (let i = 0; i < current.length; i++) {
            if (current[i] !== "(" && current[i] !== ")") {
                continue;
            }

            const next = current.slice(0, i) + current.slice(i + 1);
            if (!visited.has(next)) {
                visited.add(next);
                queue.push(next);
            }
        }
    }

    return result;
};

// 时间复杂度：O(n * 2^n)，最坏枚举删除括号的组合
// 空间复杂度：O(n * 2^n)，队列和去重集合
