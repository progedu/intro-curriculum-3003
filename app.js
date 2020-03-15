'use strict';

/**
 * トリボナッチ数処理のためのクラス
 */
class Trib{
    /**
     * メモ化用変数の用意
     */
    constructor(){
        this.memo = new Map();
        this.memo.set(0, 0);
        this.memo.set(1, 0);
        this.memo.set(2, 1);
    }
    
    /**
     * トリボナッチ数列の n 番目の値を返す関数。
     * @param {Number} n    数列の何番目か
     * @return {Number}    数列の n 番目の値
     */
    trib(n){
        if(this.memo.has(n)){
            return this.memo.get(n);
        }
        const value = this.trib(n-1) + this.trib(n-2) + this.trib(n-3);
        this.memo.set(n, value);
        return value;
    }
}

const length = 40;
var tribonacchi = new Trib();
for (let i = 0; i <= length; i++) {
    console.log(tribonacchi.trib(i));
}
