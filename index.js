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


// var f = [0, 1]; //Первые значения

// if (n <= 2) { //если n <= 2

//     var result = f.slice(0, n); //записываем в результат срез f от 0 до n

// } else {

//     for (i = 0; i < n - 2; i++) { // повторяем n-2 раза, т.к. 2 элемента уже есть
//         f.push(f[f.length - 1] + f[f.length - 2]); //заполняем (n+2)-й элемент
//     }

//     var result = f; //записываем в result наш массив f

// }

// alert(result); //вывод result на экран (через алерт)


/**
 * 
 * @param {Number} a - First param of function
 * @param {Number} b - Second param of function
 * @returns {Number} - Sum of two numbers
 */

function sum(a,b){
    return a+b;
}

sum(4,5)

/**
 * 
 * @param {String} name - Name of person
 * @returns {undefined}
 */

function sayHello(name){
    console.log(`Hello, ${name}`);
}

// sayHello(Alex);



function powNum (base, power) {
    if (power === 1){
        return base;
    }
    return base * powNum(base, power-1) 
}

const powN = (base, power) => (power === 1) ? base : base * powNum(base, power-1)