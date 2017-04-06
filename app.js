'use strict';
//フィボナッチ数列のコードからトリボナッチ数列のコードに変更
/*トリボナッチ数列の定義は、　︎　︎
    F0 = 0
    F1 = 0
    F2 = 1
    Fn+3 = Fn + Fn+1 + Fn+2 (n ≧ 0)
です。*/
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
