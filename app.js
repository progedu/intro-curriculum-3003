//トリボナッチ数列を出力します
'use strict';
const memo = new Map();

// 1~3番目の答えは定義する
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);

/*n番目の答えの値を持っていればその値を返す。
そうでなければ値を求めて連想配列に格納して値を返す。*/
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
