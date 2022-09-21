// const UserAv = 'http://';
// const imPlaceholder = 'http://';


// let imageSrc = UserAv ? UserAv : imPlaceholder;


// let usname = prompt('What is your name?');

// let user = usname ? console.log('Hello, ' + usname) : console.log('Hello, Anon');

// if (usname) {
//     console.log('Hello,' + usname);
// } else {
//     console.log('Hello, Anon'); 
// };

// function sayHello(name = 'Anon') {
//     console.log('Hello, '+ name)
// };

// sayHello();



let num1 = Number(prompt('Write number 1'));
let num2 = Number(prompt('Write number 2'));
let oper = prompt('Write operator');

console.log(calculator(num1, num2, oper));

function sum(a, b) {
    return a + b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
function sub(a, b) {
    return a - b;
}

function calculator(number1, number2, operator) {
    // debugger;
    switch(operator) {
        case '+':
            return sum(number1, number2);
        case '*':
            return mul(number1, number2);
        case '/':
            return div(number1, number2);
        case '-':
            return sub(number1, number2);
        default:
            return 'Dont know this operator';
    }
}