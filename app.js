'use strict';

//コマンドライン引数によりフィボナッチ数列かトリボナッチ数列かの処理を分ける
const cmd_argv = process.argv[2];   //コマンドライン引数を受け取る
function cmd_argv_fib(cmd_argv){    
    if(cmd_argv === '-f' || cmd_argv === '-fib'){   //引数が「-f」、「-fib」の場合はフィボナッチ数列処理を行う、デフォルトはトリボナッチ数列
        return 1;
    }
    return 0;
}
const fib_f = cmd_argv_fib(cmd_argv);   //フィボナッチ数列か、トリボナッチ数列かのフラグ

//連想配列
const memo = new Map();
memo.set(0, 0);
if(fib_f === 1){    //フィボナッチかトリボナッチかで連想配列を変える
    memo.set(1, 1);
}else{
    memo.set(1, 0);
    memo.set(2 ,1);
}

//トリボナッチ処理関数
function trib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = trib(n - 1) + trib(n - 2) + trib(n - 3);
    memo.set(n, value);
    return value;
}

//フィボナッチ処理関数
function fib(n){
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    return value;
}

const length = 40;
if(fib_f === 1){   //フィボナッチフラグが立っていたらフィボナッチ数列処理
    for(let i = 0; i <= length; i++){
        console.log(fib(i));
    }
}else{  //それ以外はトリボナッチ数列処理
    for (let i = 0; i <= length; i++) {
        console.log(trib(i));
    }
}
