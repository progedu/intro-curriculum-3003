'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
function trib(n) {
  let f = [0,0,1];
  for(let i=3;i<=n;i++) f[i] = f[i-1] + f[i-2] + f[i-3];
  return f[n];
}  
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(trib(i));
}
