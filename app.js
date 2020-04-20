'use strict';
const mapTri = new Map();
mapTri.set(0, 0);
mapTri.set(1, 0);
mapTri.set(2, 1);

function tri(n) {
    if (mapTri.has(n)) {
        return mapTri.get(n);
    }
    const value = tri(n - 3) + tri(n - 2) + tri(n - 1);
    mapTri.set(n, value);
    return value;
}
for (let i = 0; i <= length; i++) {
    console.log(i + ' ' + tri(i));
}
