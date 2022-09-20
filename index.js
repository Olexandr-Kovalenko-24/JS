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

console.log(calculator(one, two, operator));

function mul(a, b) {
    return a * b;
};

function div(a, b) {
    return a / b;
};

function min(a, b) {
    return a - b;
};

function sum(a, b) {
    return a + b;
};


function calculator(firstNum, secNum, oper) {
    switch (operator) {
        case '*':
            return mul(firstNum, secNum, oper);
        case '/':
            return div(firstNum, secNum, oper);
        case '-':
            return min(firstNum, secNum, oper);
        case '+':
            return sum(firstNum, secNum, oper);
        default:
            return 'Unknown value typed';
    }
}

