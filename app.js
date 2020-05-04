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
assert.equal(trib(1), 0, `1のtribは0ですが、実際は${trib(1) }でした`);
assert.equal(trib(2), 1, `2のtribは1ですが、実際は${trib(2) }でした`);
assert.equal(trib(3), 1, `3のtribは1ですが、実際は${trib(3) }でした`);
assert.equal(trib(10), 81, `10のtribは81ですが、実際は${trib(10) }でした`);
assert.equal(trib(20), 35890, `10のtribは35890ですが、実際は${trib(20) }でした`);
console.log('すべてのテストを通過しました');
