'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 0); //修正
memo.set(2, 1); //追加
function trib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = trib(n - 1) + trib(n - 2) + trib(n - 3);  //+ trib(n - 3)追加
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(trib(i));
}
