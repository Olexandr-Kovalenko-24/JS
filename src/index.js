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



class Fuel {
    constructor(volume, density){
        this.volume = volume;
        this.density = density;
    }
    weightOfFuel () {
        return this.volume*this.density
    }
}

const gasoline = new Fuel(900, 1,4)

class Auto {
    constructor (weightOfCar, fuel) {
        this.weightOfCar = weightOfCar;
        this.fuel = fuel;
    }
    allWeigthOfCar () {
        return this.weightOfCar+this.fuel.weightOfFuel()
    }
}

const BMW = new Auto(2000, gasoline)