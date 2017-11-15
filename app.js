'use strict';
// 計算結果を保持するキャッシュ
const memo = new Map();
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);

const map = new Map();
map.set(0, 0);
map.set(1, 1);

/**
 * フィボナッチ数列の解を計算
 * 
 * @param {number}
 */
function fib(n) {
    if (map.has(n)) {
        return map.get(n);
    }

    const value = fib(n - 1) + fib(n - 2);
    map.set(n, value);
    return value;
}

/**
 * トリボナッチ数列の解を計算
 * 
 * @param {number}
 */
function trib(n) {
    // 計算済みである場合は値を取得
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = trib(n - 1) + trib(n - 2) + trib(n - 3);
    memo.set(n, value);
    return value;
}

const length = 40;
console.log('フィボナッチ数列');
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}
console.log('トリボナッチ数列');
for (let i = 0; i <= length; i++) {
    console.log(trib(i));
}
