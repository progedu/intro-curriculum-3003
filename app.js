'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);
function trib(n) {
    if(n < 0){
        return null;
    }
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = trib(n - 1) + trib(n - 2) + trib(n - 3);
    memo.set(n, value);
    return value;
}
const length = process.argv[2] || 0;

if(length < 0){
    console.log("error:0よりも小さい値はNG!!");
}else{
for (let i = 0; i <= length; i++) {
    console.log(trib(i));
}
};


const assert = require('assert');
assert.equal(trib(-10), null, `マイナスのトリボナッチ数はnullですが、実際は${trib(-10) }でした`);
assert.equal(trib(1), 0, `1のトリボナッチ数は0ですが、実際は${trib(1) }でした`);
assert.equal(trib(2), 1, `2のトリボナッチ数は1ですが、実際は${trib(2) }でした`);
assert.equal(trib(3), 1, `3のトリボナッチ数は1ですが、実際は${trib(3) }でした`);
assert.equal(trib(10), 81, `10のトリボナッチ数は81ですが、実際は${trib(10) }でした`);
console.log('すべてのテストを通過しました');