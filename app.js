'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);
function trib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = trib(n - 1) + trib(n - 2) + trib(n-3);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(trib(i));
}
const assert = require('assert');
assert.equal(trib(0), 0, `trib(0)===0, 結果:${trib(0) }`);
assert.equal(trib(1), 0, `trib(1)===0, 結果:${trib(1) }`);
assert.equal(trib(2), 1, `trib(2)===1, 結果:${trib(2) }`);
assert.equal(trib(3), 1, `trib(3)===1, 結果:${trib(3) }`);
assert.equal(trib(4), 2, `trib(4)===2, 結果:${trib(4) }`);
assert.equal(trib(10), 81, `trib(10)===81, 結果:${trib(10) }`);
console.log('すべてのテストを通過しました');
