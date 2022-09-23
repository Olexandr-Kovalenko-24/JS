'use strict'

// const user1 = {
//     firstName: 'Alex',
//     lastName: 'Grow',
//     age: 30,
//     getName: function () {
//         console.log(this.firstName + this.lastName);
//     }
// }

// const user2 = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     getName: function () {
//         console.log(this.firstName + this.lastName);
//     }
// }

function User(firstName, lastName, age) {
this.firstName = firstName;
this.lastName = lastName;
this.age = age;
this.sayHello = function() {
    console.log(this.firstName + ' say: "Hello"')
}
}

const us = new User('Alex', 'Kov', 40);
const us2 = new User('Jack', 'Sparrow', 30);