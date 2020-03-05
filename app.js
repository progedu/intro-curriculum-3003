'use strict';
const length = 100000;
var vec = Array(length);
vec.fill(0);
function fib(n) {
    if (n <= 1) return 0;
    if (n == 2) return 1;
    if (n > 2) {
        if (vec[n] != 0) return vec[n];
        else return vec[n] = fib(n - 1) + fib(n - 2) + fib(n - 3);
    }
}
for (let i = 0; i < length; i++) {
    console.log(fib(i));
}
