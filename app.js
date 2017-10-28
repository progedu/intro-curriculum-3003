'use strict';
const memo = new Map();
// key: order, val: fib_num
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);

function trib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const fib_num = trib(n - 1) + trib(n - 2) + trib(n - 3);
    memo.set(n, fib_num);
    return fib_num;
}

const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(trib(i));
}
