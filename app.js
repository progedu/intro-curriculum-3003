'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);

function tli(Fn) {
    if (memo.has(Fn)) {
        return memo.get(Fn);
    }
    const value = tli(Fn - 1) + tli(Fn - 2) + tli(Fn - 3);
    memo.set(Fn, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(tli(i));
}

