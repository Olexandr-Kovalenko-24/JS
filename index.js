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


// let n = 0;
// while (n++ < 10) {
//     if (n === 3) {
//         continue;
//     }
//     console.log(n);
// }

// let k = 0;
// let sum = 0;
// while (k++ < 5) {
//     if (k % 2) {
//         continue;
//     }
//     sum += k;
// }
// console.log(sum);




// for (let i = 0; i < 10; i++) {
//     console.log (i);
// }

// function factorial(number){
//     let res = 1;
//     for (let i = 1; i <= number; i++) {
//         res = res * 1;
//     }
//     return res;
// }

// function pow(base, power){
//     let res = base;
//     for (let i = 1; i < power; i++) {
//         res *= base;
//     }
//     return res;
// }



// function square(h, w) {
//     return h*w;
// }

// function length(diam) {
//     return diam*Math.PI;
// }





// function divide(number) {
//     for (let i = 1; i <= number; i++) {
//         if (number % i === 0) {console.log(i)}
// }
// }


// const userPass = 'Good password';
// let password = '';

// do {
//     password = prompt('Your password is?')
// } while(password !== userPass)
// console.log('Right password');


// do {
//     password = prompt('Your password is?');
//     if (password !== userPass) {}
//     else {console.log('Right password')}
// } while (password !== userPass)


// let i = 0;
// while(i++<10) {
//     if (!(i%2)){console.log(i)
// }
// }

// let i = 0;
// while(i++<10) {
//     if (i%3){console.log(i)
// }
// }

// let i = 0;
// while(i++<10) {
//     if (i === 3){
//         continue;
// }
// console.log(i);
// }



function factorial(number){
    let res = 1;
    for(let i = 1; i <= number; i++){
        res *= i;
    }
    console.log(res)
}


