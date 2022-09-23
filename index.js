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

// function User(firstName, lastName, age) {
// this.firstName = firstName;
// this.lastName = lastName;
// this.age = age;
// this.sayHello = function() {
//     console.log(this.firstName + ' say: "Hello"')
// }
// }

// const us = new User('Alex', 'Kov', 40);
// const us2 = new User('Jack', 'Sparrow', 30);



// function Car(brand, model, capasityOfEngine, numberOfSeats, topSpeed) {
//     this.brand = brand;
//     this.model = model;
//     this.capasityOfEngine = capasityOfEngine;
//     this.numberOfSeats = numberOfSeats;
//     this.topSpeed = topSpeed;
//     this.currentSpeed = 0;
//     this.run = function () {
//         console.log(this.model + ' rides ' + this.currentSpeed + ' km/h')
//     };
//     this.stop = function () {
//         console.log(this.model + ' is stopped')
//     };
//     this.accelerate = function (value) {
//         this.currentSpeed += value;
//         if (this.currentSpeed > this.topSpeed) {this.currentSpeed = this.topSpeed}
//             return this.run()
//     };
//     this.deaccelerate = function (value) {
//         this.currentSpeed -= value;
//         if (this.currentSpeed > 0) {console.log(this.currentSpeed)}
//         else {console.log(this.stop())}
//     };
// }

// const lexusLX500 = new Car('lexus', 'LX 500', 2000, 5, 300);




// function User(name, lastName, age, email) {
//     this.name = name;
//     this.lastName = lastName;
//     this.age = age;
//     this.email = email;
//     this.password = 123;
//     this.isLogin = false;
//     this.getFullName = function () {
//         console.log(this.name + ' ' + this.lastName)
//     };
//     this.signIn = function () {
//         let pass = Number(prompt('Write your password'));
//         if (this.password === pass) {
//             this.isLogin = true;
//             return 'you are logIn'
//         } else {return 'password incorect'}
//     }
// };

// const alex = new User ('Alex', 'Kovalenko', 24, '22.gmailcom')



// function Worker (name, lastName, rate, days){
//     this.name = name;
//     this.lastName = lastName;
//     if(rate < 0) {
//         this.rate = 0;
//     } else {
//         this.rate = rate;
//     };
//     if(days > 31) {
//         this.days = 31;
//     } else {
//         this.days = this.days;
//     };
//     this.getSalary = function(){
//         return this.rate*this.days
//     }
// }

// const petro = new Worker('Petro', 'Roshenko', 200, 4)





const templateString = `2+2
${4+4}
=4`

console.log(templateString);