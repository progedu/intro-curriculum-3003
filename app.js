(function () {
	'use strict';
	let memo = new Map();
	memo.set(0, 0);
	memo.set(1, 0);
	memo.set(2, 1);
	function trib(n) {
		if(memo.has(n)) {
			return memo.get(n);
		}
		let value = trib(n - 3) + trib(n - 1) + trib(n - 2);
		memo.set(n, value);
		return value;
	}
	let length = 40;
	for (let i = 0; i < length; i++) {
		console.log(trib(i));
	}
})();
