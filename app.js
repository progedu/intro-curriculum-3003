'use strict';
function TribonachCalculator() {
  this._memo = new Map();
  this._memo.set(0, 0);
  this._memo.set(1, 0);
  this._memo.set(2, 1);

  this.calculate = (n) => {
    if (this._memo.has(n)) {
      return this._memo.get(n);
    } else {
      let res = this.calculate(n-3) + this.calculate(n-2) + this.calculate(n-1);
      this._memo.set(n, res);
      return res;
    }
  }

  this.calculate_and_print = (n) => {
    this.calculate(n);
    let fun = (value,key,map) => {
        process.stdout.write(value.toString());
        if (key != n) process.stdout.write(", ");
        else process.stdout.write("\n");
    };
    this._memo.forEach(fun);
  }
}

const number = process.argv[2] || 40;

let calculator = new TribonachCalculator();
calculator.calculate_and_print(number);