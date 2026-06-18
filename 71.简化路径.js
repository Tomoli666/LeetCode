/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = [];
    const parts = path.split("/");

    for (const part of parts) {
        if (part === "" || part === ".") {
            continue;
        }

        if (part === "..") {
            stack.pop();
        } else {
            stack.push(part);
        }
    }

    return "/" + stack.join("/");
};

// 时间复杂度：O(n)，n 是路径字符串长度
// 空间复杂度：O(n)，栈保存有效目录名
