'use strict'

const arr = [12, 23, 6, 79, 45, 76, 86, 32, 89, 21];

// function sum3and5element (array){
// return array[2]+array[4]
// };

function sumOfArray (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

function avarageOfArray (array) {
    let sum = sumOfArray(array);
        return sum / array.length;
}