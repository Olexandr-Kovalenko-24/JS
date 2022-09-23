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



function Car(brand, model, capasityOfEngine, numberOfSeats, topSpeed, currentSpeed) {
    this.brand = brand;
    this.model = model;
    this.capasityOfEngine = capasityOfEngine;
    this.numberOfSeats = numberOfSeats;
    this.topSpeed = topSpeed;
    this.currentSpeed = currentSpeed;
    this.run = function () {
        console.log(this.model + ' rides')
    };
    this.stop = function () {
        console.log(this.model + ' stop')
    };
    this.accelerate = function (value) {
        let acc = this.currentSpeed + value;
        if (acc >= this.topSpeed) {console.log(this.topSpeed)}
        else {console.log(acc)}
    };
    this.deaccelerate = function (value) {
        let acc = this.currentSpeed - value;
        if (acc > 0) {console.log(acc)}
        else {console.log(this.stop())}
    };
}

const car1 = new Car('lexus', 'supper', 2000, 5, 300, 100);