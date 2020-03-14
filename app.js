'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
memo.set(2, 1);
function tribonacci(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
    memo.set(n, value);
    return value;
}
const err =  console.log('自然数を入力してください');
const length = process.argv[2] || 0;
for (let i = 0; i <= length; i++) {
    console.log(`${i+1}番目 ${tribonacci(i)}`);
}

