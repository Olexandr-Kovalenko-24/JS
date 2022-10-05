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
    #rate;
    constructor(name, rate, days) {
        this.name = name;
        this.rate = rate;
        this.days = days;
    }

    set rate(value) {
        if (value < 0) {
            throw new RangeError('rate must be < 0')
        }
        this.#rate = value;
    }

    get rate() {
        return this.#rate;
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

    get days() {
        return this._days;
    }

    getSalary() {
        return this.rate * this.days;
    }
}

class Validator {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    chekValue(value) {
        if (typeof value !== 'number') {
            throw new TypeError('from and to must be a number')
        }
        return true;
    }

    set from(value) {
        if (this.chekValue(value)) {
            this._from = value;
        }
    }

    get from() {
        return this._from;
    }

    set to(value) {
        if (this.chekValue(value) && value > this._from) {
            this._to = value;
        } else {
            throw new Error('Value is not correct')
        }
    }

    get to() {
        return this._to;
    }

    get range() {
        let array = [];
        for (let i = this._from; i <= this._to; i++) {
            array.push(i);
        }
        return array;
    }

    isNumberInRange(number) {
        return this.range.includes(number)
    }
}

const val = new Validator(5, 9)



class Animal {
    constructor(name, amountOfLegs, type) {
        this.name = name;
        this.amountOfLegs = amountOfLegs;
        this.type = type;
    }

    run() {
        return `${this.name} is running`
    }

    eat() {
        return 'Yumm!)'
    }
}

class Cat extends Animal {
    constructor(name, amountOfLegs, color) {
        super(name, amountOfLegs, 'Cat');
        this.color = color;
    }
    sleep() {
        return `${this.name} is sleeping`
    }
}

class Kitten extends Cat {
    constructor(name, amountOfLegs, color) {
        super(name, amountOfLegs, color);
    }
    makeNoize () {
        return `${this.name} says 'Piiii'`
    }
    
    sleep () {
        return `${this.name} is noizy sleeping`
    }
}


class Figure {
    constructor (type) {
        this.sideQuantity = type;
    }
    getArea () {

    }
}

class Triangle extends Figure {
    constructor(a,b, angle){
        supper(3);
        this.a = a;
        this.b = b;
        this.angle = angle;
    }

    getArea (){
        return 0.5*this.a*this.b*Math.sin(this.angle)
    }
}

class Square extends Figure {
    constructor(a){
        super(4);
        this.a = a;
    }

    getArea () {
        return this.a*this.a
    }
}

class Circle extends Figure {
    constructor(d){
        super(Infinity);
        this.d = d;
    }

    getArea () {
        return Math.PI*(this.d*this.d /4)
    }
}