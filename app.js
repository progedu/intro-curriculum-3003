'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);

function trib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = trib(n - 1) + trib(n - 2) + trib(n -3);   //nの1つ前 + 2つ前 + 3つ前　をしている
    //3の場合　trib(2) + trib(1) + trib(0) →　1 + 0 + 0 = 1
    //4の場合　trib(3) + trib(2) + trib(1) →　1 + 1 + 0 = 2
    //5の場合　trib(4) + trib(3) + trib(2) →　2 + 1 + 1 = 4
    
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(trib(i));
}
