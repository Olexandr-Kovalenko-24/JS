'use strict'

const user1 = {
    firstName: 'Alex',
    lastName: 'Grow',
    age: 30,
    getName: function () {
        console.log(this.firstName + this.lastName);
    }
}

const user2 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    getName: function () {
        console.log(this.firstName + this.lastName);
    }
}

function fn () {
    console.log(this)
}
