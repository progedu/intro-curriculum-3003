'use strict';

var Trib = function () {
  this.memo = new Map();
  this.memo.set(0, 0);
  this.memo.set(1, 0);
  this.memo.set(2, 1);
}

Trib.prototype.calc = function (n) {
  if (this.memo.has(n)) {
    return n;
  }
  const value = this.calc(n - 3) + this.calc(n - 2) + this.calc(n - 1);
  this.memo.set(n, value);
  return value;
}

const t = new Trib();
console.log(t.calc(100));
