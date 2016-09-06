'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);
function trib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = trib(n - 1) + trib(n - 2) + trib(n - 3);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i < length; i++) {
    console.log(trib(i));
}

console.assert(
    trib(10) === 81,
    '10番目のトリボナッチ数列を帰す'
);

console.assert(
    trib(1000) === 8.155077059490629e+263,
    '1000番目のトリボナッチ数列を帰す'
);