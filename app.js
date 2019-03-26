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
for (let i = 0; i <= length; i++) {
    console.log(trib(i));
}

// 末尾再帰
function tribTail(n) {
    function loop(acc0, acc1, acc2, n) {
        if (n === 0) return acc0;
        if (n === 1) return acc1;
        if (n === 2) return acc2;
        return loop(acc1, acc2, acc0 + acc1 + acc2, n-1);
    }
    return loop(0, 0, 1, n);
}

// for文
function tribFor(n) {
    let t0 = 0;
    let t1 = 0;
    let t2 = 1;
    if (n === 0) return t0;
    if (n === 1) return t1;
    if (n === 2) return t2;
    let result = 0;
    for (let i = 3; i <= n; i++) {
        result = t0 + t1 + t2;
        t0 = t1;
        t1 = t2;
        t2 = result;
    }
    return result;
}
const assert = require('assert');
for (let i = 0; i <= length; i++) {
    assert(trib(i) === tribTail(i));
    assert(trib(i) === tribFor(i));
}