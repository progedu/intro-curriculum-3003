'use strict';

// トリボナッチ数列
// 0番目は0
// 1番目は0
// 2番目は1
// その後は n-1とn-2とn-3の値を足したもの

// 出力例: 0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768, 10609, 19513, 35890, ...

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

let n1 = 0;
let n2 = 0;
let n3 = 1;

function trib2(n) {
    if (n <= 1) {
        return 0;
    }else if (n === 2) {
        return 1;
    }

    const value = n1 + n2 + n3;
    n1 = n2;
    n2 = n3;
    n3 = value;
    return value;
}


const length = 40;

for (let i = 0; i <= length; i++) {
    console.log(i + " " + trib(i) + " " + trib2(i));
}
