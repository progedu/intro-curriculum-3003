'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
//Fn(2)の初期値
memo.set(2, 1);
function trib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    // Fn(n-1) + Fn(n-2) + Fn(n-3)を実装 
    const value = trib(n - 1) + trib(n - 2) + trib(n - 3);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(trib(i));
}
