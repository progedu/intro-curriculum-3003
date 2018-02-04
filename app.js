'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);
function trim(n) {
    if (memo.has(n)){
        return memo.get(n);
    }
    const value = trim(n - 1) + trim(n - 2) + trim(n - 3);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= 40; i++) {
    console.log(trim(i));
}
