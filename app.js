'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 0); // トリボナッチ数列化のため改変
memo.set(2, 1); // トリボナッチ数列化のため追加
function trib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    // トリボナッチ数列化のため改変
    const value = trib(n - 1) + trib(n - 2) + trib(n - 3);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(trib(i));
}
