'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
memo.set(2, 1);
function trib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = trib(n - 1) + trib(n - 2) + trib(n - 3);
    memo.set(n, value);
    return value;
}
let list = "出力例: ";
const length = 40;
for (let i = 0; i <= length; i++) {
    list = list + trib(i) + ", "; // console.log(trib(i));
    
}
const result = list.slice(0, -2);
console.log(result);