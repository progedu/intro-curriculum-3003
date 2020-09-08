'use strict';
const memo = new Map();//連想配列
memo.set(0, 0); //0の時0
memo.set(1, 0);//1の時0
memo.set(2, 1);//2の時１
function trib(n) {

    //★メモにデータがあればそれを使う
    if (memo.has(n)) {
        return memo.get(n);
    }
    //★メモにデータがないので計算する
    const value = trib(n - 1) + trib(n - 2) +trib(n - 3); //メモになかった時の計算
    memo.set(n, value);　//次回以降値が使えるように登録
    return value;
}
//答え
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(trib(i));
}
