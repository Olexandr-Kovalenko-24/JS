'use strict'

class User {
    constructor(name, lastName, age, email) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    getFullName() {
        return `${this.name} ${this.lastName}`
    }
    sayHello() {
        return `Hello, ${this.name}`
    }
}

const Alex = new User('Alex', "Kovalenko", 24, '22@gmail.com')



class Fuel {
    constructor(volume, density) {
        this.volume = volume;
        this.density = density;
    }
    weightOfFuel() {
        return this.volume * this.density;
    }
}

const gasoline = new Fuel(50, 1.4)

/**
 * @param {Number} weightOfCar
 * @param {Fuel} fuel
 */

class Auto {
    constructor(weightOfCar, fuel) {
        this.weightOfCar = weightOfCar;
        this.fuel = fuel;
    }
    allWeigthOfCar() {
        return this.weightOfCar + this.fuel.weightOfFuel()
    }
}

const BMW = new Auto(2000, gasoline)




class Friend {
    constructor(name, money, friend = null) {
        this.name = name;
        this.money = money;
        this.friend = friend;
    }
    countMoney() {
        if (this.friend === null) {
            return this.money;
        }
        if (Array.isArray(this.friend)) {
            return this.money + this.friend.reduce((money, friend) => (money + friend.countMoney()), 0)
        }
        return this.money + this.friend.countMoney()
    }
}


const friend0 = new Friend('Jane', 50, null);
const friend1 = new Friend('Bred', 150, null);
const friend2 = new Friend('Alex', 100, friend1);
const friend3 = new Friend('Tony', 100, [friend2, friend0]);



class Worker {
    constructor(name, rate, days) {
        this.name = name;
        this.rate = rate;
        this.days = days;
    }

    set rate(value) {
        if (value < 0) {
            throw new RangeError('rate must be < 0')
        }
        this._rate = value;
    }

    get rate () {
        return this._rate;
    }

    set days(value) {
        if (typeof value !== 'number') {
            throw new TypeError('days must a number')
        }
        if (value < 0) {
            throw new RangeError('days must be < 0')
        }
        this._days = value;
    }

    get days () {
        return this._days;
    }

    getSalary() {
        return this.rate * this.days;
    }
}