'use strict';

// アロー関数による回帰処理を試みた
const memo = new Map();
memo.set(0, 0);//key:n番目, value:合計
memo.set(1, 0);
memo.set(2, 1);

const trib = n => {
  if (memo.has(n)) {//Mapオブジェクト内にkeyに関連した要素が存在するかどうかを示すbooleanを返します。
    return memo.get(n);//keyに関連した値を返します。
  }
  const value  = trib(n - 1) + trib(n - 2) + trib(n - 3);
  memo.set(n, value);
  return value;
};
// function fib(n) {
//   if ( n === 0 ) {
//     return 0;
//   }else if (n === 1) {
//     return 1;
//   }
//   return fib(n - 1) + fib(n - 2);
// };

const length = 40;//length= 40の場合
for ( let i = 0; i <= length; i++ ) {
  console.log(trib(i));
}
// const length = 100;//length=100の場合
// for ( let i = 0; i <= length; i++ ) {
//   console.log(fib(i));
// }
