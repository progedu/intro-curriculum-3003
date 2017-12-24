'use strict';

// メモ化に利用する連想配列を用意する
const memo = new Map();
// トリボナッチ数列の初期値を入れる
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);

// トリボナッチ数列を求める
function trib(n) {
    // メモ化の連想配列に該当するkeyがあればその値を返す
    if (memo.has(n)) {
        return memo.get(n);
    }
    // メモ化の連想配列に該当するkeyがなければ再帰で求める
    const value = trib(n - 1) + trib(n - 2) + trib(n - 3);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(trib(i));
}
