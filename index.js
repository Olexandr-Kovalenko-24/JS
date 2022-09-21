// let i = 0;
// while (i < 10) {
// i++;
// console.log('1');
// }

// let j = 0;
// do {
//     console.log('2')
// } while (j++ < 3);


// const password = 'Good password';
// let UserValue = '';

// do {
//     let UserValue = prompt('Write password');
// } while (UserValue !== password);
// console.log('Good password');


// let n = 1;
// while (n++ < 10) {
//     if (n % 2 === 0) {
//         console.log(n);
//     }
// }


let n = 0;
while (n++ < 10) {
    if (n === 3) {
        continue;
    }
    console.log(n);
}