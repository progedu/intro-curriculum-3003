'use strict';

const memo = new Map();

memo.set(0,0);
memo.set(1,0);
memo.set(2,1);

function tib(n) {
	if (memo.has(n)) {
		return memo.get(n);
	}
	const value = tib(n-1) + tib(n-2) + tib(n-3);
	memo.set(n, value);
	return value;
}

const length = 40;
let i = 0;

while (i <= length) {
	console.log(tib(i));
	i++;
}

