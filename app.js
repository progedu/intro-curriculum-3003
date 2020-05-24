'use strict';
var tribonacci = new Map();
const length = 40;
//トリボナッチ数列作成
for (let i=0;i<=length;i++){
    tribonacci.set(i,tori(i));
    console.log(tribonacci.get(i));
}

//トリボナッチ数列作成関数
function tori(n){
    if(n===0){
        return 0;
    }else if(n===1){
        return 0;
    }else if(n===2){
        return 1;
    }
    return tribonacci.get(n-1) + tribonacci.get(n-2) + tribonacci.get(n-3);
}
