'use strict'

// for (let i = 1; i < 10; i++) {
//     for (let j = 1; j < 10; j++) {
//         console.log(`${j} * ${i}  = ${j*i}`);
//     }
//     console.log('-------')
// }

// let stars = ''
// for (let i = 0; i < 8; i++) {
//     for (let j = 0; j < 1; j++) {
//         stars += '*';
//     }
//     console.log(stars)
// }

// let stars2 = ''
// for (let i = 0; i < 8; i++) {
//     for (let j = 0; j < i; j++) {
//         stars += '*';
//     }
//     stars += '\n';
// }
// console.log(stars)



// function drawSquare(dimention) {
//     let square = ''
//     for (let i = 0; i <= dimention; i++) {
//         for (let j = 0; j <= dimention; j++) {
//             if(i === 0 || i === dimention
//                 || j === 0 || j === dimention
//                 || i === j){
//                 square += '*';
//             } else {
//                 square += ' '
//             }
//         }
//         square += '\n';
//     }
//     console.log(square)
// }

// function drawSquare(dimention) {
//     let square = ''
//     for (let i = 0; i <= dimention; i++) {
//         for (let j = 0; j <= dimention; j++) {
//             if(i === 0 || i === dimention
//                 || j === 0 || j === dimention
//                 || i === dimention - j){
//                 square += '*';
//             } else {
//                 square += ' '
//             }
//         }
//         square += '\n';
//     }
//     console.log(square)
// }

function divDiap(a, ... b){
    for (let i = a; i <= b; i++) {
            for (let j = 1; j <= i; j++) {
                if (number % j === 0) {console.log(j)};
            }
            console.log('\n')
        }
}

// function divide(number) {
//     for (let i = 1; i <= number; i++) {
//         if (number % i === 0) {console.log(i)}
// }
// }


const obj = {
    test: 'supervalue',
    key: 1,
};

function consoleTest() {
    console.log(this.test)
}

const wrapperFunction = consoleTest.bind(obj);
wrapperFunction();

consoleTest.call(obj);