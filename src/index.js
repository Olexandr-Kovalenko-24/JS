'use strict'

class User {
    constructor(name, lastName, age, email) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    getFullName () {
        return `${this.name} ${this.lastName}`
    }
    sayHello () {
        return `Hello, ${this.name}`
    }
}

const Alex = new User('Alex', "Kovalenko", 24, '22@gmail.com')


