'use strict';
const memo =new Map();
memo.set(0,0);
memo.set(1,0);
memo.set(2,1);
const fib = n => memo.has(n) ? memo.get(n) : memo.set(n,fib(n-1)+fib(n-2)+fib(n-3));
const length = 40;
for(let i=0;i<=length;i++){
    console.log(fib(i));
}