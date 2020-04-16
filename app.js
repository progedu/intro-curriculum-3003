'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);
function trib(n) {
    if(n < 0) { return; }
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
const result = [0,0,1,1,2,4,7,13,24,44,81,149,274,504,927,1705,
    3136,5768,10609,19513,35890,66012,121415,223317,
    410744,755476,1389537,2555757,4700770,8646064,
    15902591,29249425,53798080,98950096,181997601,
    334745777,615693474,1132436852]; // 0~37まで
for(let j = 0; j < result.length; j++) {
    assert.equal(trib(j), result[j], `トリボナッチ数列の${j}番目は${result[j]}ですが、実際は${trib(j)}でした`);
}
console.log('全てのテストを通過しました');