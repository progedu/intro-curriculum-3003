'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);

function trb(n) {
    if(memo.has(n)){
        return memo.get(n);
    }
    const value = trb(n-3) + trb(n-2) + trb(n-1);
    memo.set(n, value);
    return value;
}


const length = 30;
for(let i = 0; i <= length; i++) {
    console.log(trb(i));
}
