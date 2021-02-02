'use strict';
const memo = new Map();
memo.set('F0', 0);
memo.set('F1', 0);
memo.set('F2', 1);

function trib(n) {
    if (memo.has('F' + n)) {
        return memo.get('F' + n);
    }
    const value = trib(n - 1) + trib(n - 2) + trib(n - 3);
    memo.set('F' + n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(trib(i));
}
