'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
memo.set(2, 1);
function trib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = trib(n - 1) + trib(n - 2) +trib(n-3);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(trib(i));
}

//F0=0 F1=0 F2=1 F3=F0+F1+F2→0+0+1
//F4の場合は　F1(0)+F2(1)+F3(1)→2
//F4(2)=Fn-1 + Fn-2 +Fn-3
//F5 = F5-3 +F5-2 + F5-1