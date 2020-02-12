// トリボナッチ数列
'use strict';
const memo = new Map();
memo.set(0, 0); //0番目で０を返す
memo.set(1, 0); //1番目で0を返す
memo.set(2, 1); //2番目で1を返す

function trib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = trib(n - 1) + trib(n - 2) +trib( n - 3);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(i+"番目"+trib(i));
}
