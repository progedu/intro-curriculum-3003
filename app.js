'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);
function ftri(n) {
  if(memo.has(n)) {
    return memo.get(n);
  }
  const value = ftri(n - 1) + ftri(n - 2) + ftri(n - 3);
  memo.set(n, value);
  return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(ftri(i));
}
