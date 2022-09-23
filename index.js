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



function Car(brand, model, capasityOfEngine, numberOfSeats, topSpeed) {
    this.brand = brand;
    this.model = model;
    this.capasityOfEngine = capasityOfEngine;
    this.numberOfSeats = numberOfSeats;
    this.topSpeed = topSpeed;
    this.currentSpeed = 0;
    this.run = function () {
        console.log(this.model + ' rides ' + this.currentSpeed + ' km/h')
    };
    this.stop = function () {
        console.log(this.model + ' is stopped')
    };
    this.accelerate = function (value) {
        this.currentSpeed += value;
        if (this.currentSpeed > this.topSpeed) {this.currentSpeed = this.topSpeed}
            return this.run()
    };
    this.deaccelerate = function (value) {
        this.currentSpeed -= value;
        if (this.currentSpeed > 0) {console.log(this.currentSpeed)}
        else {console.log(this.stop())}
    };
}

const lexusLX500 = new Car('lexus', 'LX 500', 2000, 5, 300);

