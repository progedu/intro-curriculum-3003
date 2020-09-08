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

// 別解 (配列)
const v = [0, 0, 1]
function trib2(n){
    if(n < v.length){
        return v[n];
    }

    const value = trib2(n - 1) + trib2(n - 2) + trib2(n - 3)
    v.push(value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    //console.log(trib(i));
    console.log(trib2(i));
}
