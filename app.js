'use strict';
const memo = new Map();
memo.set(0, 0); // n=0のとき
memo.set(1, 0); // n=1のとき
memo.set(2, 1); // n=2のとき
function trib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = trib(n - 1) + trib(n - 2) + trib(n - 3);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(trib(i));
}
