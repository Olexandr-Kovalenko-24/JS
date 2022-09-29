'use strict'

function sum(a, b, ...array){
    console.log(a);
    console.log(b);
    console.log(array);
}

sum(1,2,35,63,24)


const sumOfAllArguments = (...restAr) => 
restAr.reduce((accumulator, currentValue) => 
accumulator + currentValue, 0)

console.log(sumOfAllArguments(3,46,24,67))