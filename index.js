'use strict'

function sum(a, b, c){
    return a+b+c;
}


const numbers = [1, 2, 3, 75, 23]

console.log(sum(...numbers));

const newArr = [...numbers]