'use strict';
const history = new Map();
history.set(0, 0);
history.set(1, 0);
history.set(2, 1);
function trib(n) {
    if (history.has(n)) {
        return history.get(n);
    }
    const tribn = trib(n - 1) + trib(n - 2) + trib(n - 3);
    history.set(n, tribn);
    return tribn;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(trib(i));
}
