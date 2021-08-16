'use strict';

const culcuMap = new Map() ;

culcuMap.set(0, 0) ;

culcuMap.set(1, 0) ;

culcuMap.set(2, 1) ;

function sumMap(n){
    if( culcuMap.has(n) ){
        return culcuMap.get(n) ;
    }
    const value = sumMap(n-1) + sumMap(n-2) + sumMap(n-3) ;
    culcuMap.set(n , value) ;
    return culcuMap.get(n) ;
};

const length = 40
for(let i = 0; i <= length ; i++ ){
    console.log( sumMap(i) );
};
