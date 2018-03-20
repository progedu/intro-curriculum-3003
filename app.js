'use strict';
//連想配列Map
const memo = new Map();
memo.set(0,0);//0番目は0
memo.set(1,0);//1番目は1
memo.set(2,1);


function fib(n){
    if(memo.has(n))//nをキーとした答えを持っていれば
    {
        return memo.get(n);//その値をそのまま関数の値として返す
    }
    const value = fib(n-1) + fib(n-2);
    memo.set(n,value);
    return value;
}

function trib(n){
    if(memo.has(n))
    {
        return memo.get(n); 
    }
    const value = trib(n-1) + trib(n-2) + trib(n-3);
    memo.set(n,value);
    return value;
}
const length = 40;

for(let i=0; i<=length;i++){
    //console.log(fib(i));
    console.log(trib(i));
}
