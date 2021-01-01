'use strict';
const memo = new Map();
memo.set(0,0);
memo.set(1,0);
memo.set(2,1);
function fin(n){
    if(memo.has(n)){
        return memo.get(n);
    }
    const value = fin(n-3)+fin(n-2)+fin(n-1);
    memo.set(n, value);
    return value;
}
const value = 40;
for(let i = 0; i <= value;i++){
    console.log(fin(i));
}
