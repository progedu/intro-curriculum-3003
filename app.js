'use strict';
// トリボナッチ数列
const record = new Map();
record.set(0, 0);
record.set(1, 0);
record.set(2, 1);
function tri(m){
	if(record.has(m)){
		return record.get(m);
	}
	const value = tri(m-1) + tri(m-2) + tri(m-3);
	record.set(m, value);
	return value; 
};

const length = 40;
for (let j = 0; j <= length; j++){
	console.log(tri(j));
};

