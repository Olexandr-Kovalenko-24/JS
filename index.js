// function square(b) {
//     return b*b;
// }

// function supperFun (number, fn) { //HOF
//     fn(number); // callback function
// }

// supperFun(5, square);

const one = Number(prompt('write number'));
const two = Number(prompt('write number2'));
const operator = prompt('write operator');

function calculator() {
    switch (operator) {
        case '*':
            return one * two;
        case '/':
            return one / two;
        case '-':
            return one - two;
        case '+':
            return one + two;
        default:
            return 'Unknown value typed';
    }
}

console.log(calculator());