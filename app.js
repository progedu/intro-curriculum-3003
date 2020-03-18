'use strict';
const memo = new Map();
memo.set(0,0);
memo.set(1,0);
memo.set(2,1);
function fib(n){
  if(memo.has(n)){
    return memo.get(n);
  }
  const value = fib(n-1)+fib(n-2)+fib(n-3);
  memo.set(n, value);
  return value;
}
const lenghth =40;
for (let i=0; i<= lenghth; i++){
  console.log(fib(i));
}
