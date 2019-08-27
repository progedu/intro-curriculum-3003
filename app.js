'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);
function trib(n) {
    if (n < 0) { return null; };//負の引数を排除
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
//教科書に載っていた正解をつテスト
const answer = [0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768, 10609, 19513, 35890];
const assert = require('assert');
for ( let i = 0; i<answer.length; i++){
    assert.equal(trib(i), answer[i], `0のトリボナッチ数は${answer[i]}ですが、実際は${trib(i)}でした`);
}
console.log('すべてのテストを通過しました');
