'use strict'

function factorial(number) {
    if (number === 1) {
        return 1;
    }
    return number * factorial(number - 1);
}

function pow(base, power) {
    if (power === 1) {
        return base;
    }
    return base * pow(base, power - 1)
}

// const pow2 = (base, power) => (power === 1) ? base :
// pow2(base, power - 1)


const arr = [2, 3, 2, 1, [4, 2, 3, [6, 3, 2, [3], 3, 3], 2]]

function sumOfNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            sum += sumOfNumbers(array[i]);
        } else {
            sum += array[i]
        }
    }
    return sum;
}

console.log(sumOfNumbers(arr))