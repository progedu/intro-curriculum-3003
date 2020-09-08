'use strict'
const memo = new Map();
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);
memo.set(3, 1);
function tetora(n) {
  if(memo.has(n)) {
  return memo.get(n);
}
const value = tetora(n - 1) + tetora(n - 2) + tetora (n - 3) + tetora(n - 4);
memo.set(n, value);
return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
  console.log (tetora(i));
}