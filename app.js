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
const assert = require('assert');
assert.equal(trib(1), 0, `1のトリボナッチ数列は0ですが、実際は${trib(1) }でした`);
assert.equal(trib(2), 1, `2のトリボナッチ数列は1ですが、実際は${trib(2) }でした`);
assert.equal(trib(3), 1, `3のトリボナッチ数列は1ですが、実際は${trib(3) }でした`);
assert.equal(trib(5), 4, `5のトリボナッチ数列は4ですが、実際は${trib(5) }でした`);
assert.equal(trib(10), 81, `10の階乗は81ですが、実際は${trib(10) }でした`);
console.log('すべてのテストを通過しました');