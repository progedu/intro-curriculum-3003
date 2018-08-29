'use strict';
const memo = new Map(); // 計算結果を保存する変数
// 0 と 1 のときは 0 を、2 のときは 1 を返す
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);
/**
 * トリボナッチ数列を求める関数
 * @param {Number} n - トリボナッチ数を求める番目
 * @returns {Number} トリボナッチ数
 */
function trib(n) {
    // もしも n 番目のトリボナッチ数が保存されていればそれを返す
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = trib(n - 1) + trib(n - 2) + trib(n - 3); // 前と、前の前と、前の前の前のトリボナッチ数を足し合わせた数
    memo.set(n, value); // 計算結果を連想配列に保存する
    return value; // 計算結果を返す
}
const length = 40; // トリボナッチ数を求める回数
// 0 番目から length 番目までのトリボナッチ数を全て求める
for (let i = 0; i <= length; i++) {
    console.log(trib(i));
}
