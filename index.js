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

// console.log(sumOfNumbers(arr))




function fibonacchi(number) {
    if (number <= 1) {
        return number;
    } else {
        return (fibonacchi(number - 1) + fibonacci(number - 2));
    }
}

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

function fn(n) {
    if(n === 0){
        return 0}
    if (n===2 || n===1){
        return 1
    }
    return fn(n-1)+fn(n-2)
}

for (let i = 0; i<7; i++){
    console.log(fn(i))
}