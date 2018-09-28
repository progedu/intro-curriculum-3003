'use strict';
const memo = new Map();
//連想配列を定義
memo.set(0,0)//
memo.set(1,0)//
memo.set(2,1)//
function trib(Fn){
    if(memo.has(Fn)){
        return memo.get(Fn);
    }
    const value = trib(Fn - 1) + trib(Fn - 2) + trib(Fn - 3);
    memo.set(Fn,value);
    return value 
}
const lenght = 40;
for(let i = 0; i <= lenght; i++){
    console.log(trib(i));
}
