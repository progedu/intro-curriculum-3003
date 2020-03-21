'use strict';

function trib (n) {
    if (n === 0 | n === 1) {
        return 0;
    }
    let prepre = 0;
    let pre = 0;
    let current = 1;
    for (let i = 2; i < n; i++) {
        let next = current + pre + prepre;
        prepre = pre;
        pre = current;
        current = next;
    }
    return current;
}

const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(trib(i));
}
