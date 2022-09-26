'use strict'

// const arr = [12, 23, 6, 79, 45, 76, 86, 32, 89, 21];

// // function sum3and5element (array){
// // return array[2]+array[4]
// // };

// function sumOfArray (array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }

// function avarageOfArray (array) {
//     let sum = sumOfArray(array);
//         return sum / array.length;
// }

const arr1 = [3, 4, 5];
const arr11 = [3, 4, 5];
const arr2 = [10, 12, 13];

const concatArray12 = arr1.concat(arr2);

arr11.reverse();

arr1.push(7, 8, 9);

arr1.unshift(1, 2);

const arr3 = ['aaa', 'bbb', 'ccc'];
console.log(arr3.pop());

const arr4 = ['aaa', 'ddd', 'eee'];
console.log(arr4.shift());

const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr51 = arr5.slice(2, 5);

arr5.splice(1, 2);
arr5.splice(3);

const arr6 = [1, 2, 3, 4, 5]
arr6.splice(1, 1, 'w');
arr6.splice(1, 0, 'tr');
arr6.splice(5, 0, 'vvv');

const arr7 = ['a', 'b', 'c', 'd']
arr7.reverse();
arr7.join('')