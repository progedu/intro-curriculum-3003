(function () {
    'use strict';
    let memo = new Map();
    memo.set(0, 0);
    memo.set(1, 0);
    memo.set(2, 1);
    function fib(n) {
        if(memo.has(n)) {
            return memo.get(n);
        }
        let value = fib(n - 1) + fib(n - 2) + fib(n - 3);
        memo.set(n, value);
        return value;
    }
    let length = 40;
    for (let i = 0; i < length; i++) {
        console.log(fib(i));
    }
})();
