'use strict'

/**
 * 
 * @param {String} name - Name of person
 * @returns {undefined}
 */

function sayHello(name) {
    if (typeof name !== 'string'){
        throw new TypeError('Name must be a string');
    }
    console.log(`Hello, ${name}`);
}


/**
 * 
 * @param {Number} base 
 * @param {Number} power - More than 0
 * @returns {Number} base on power
 * @throws {TypeError} base or power not a number
 * @throws {RangeError} when power < 0
 */

function pow (base, power) {
    if (typeof base !== 'number' || typeof power !== 'number') {
        throw new TypeError('Base and power must be a number')
    }
    if (power<=0){
        throw new RangeError('Power must be more than 0')
    }
    let res = 1;
    for (let i = 0; i < power; i++) {
        res *= base;
    }
    return res;
}

console.log('start')
try {
    pow(2,-2)
    console.log('end')
} catch(error){
    console.log(error)
}

console.log('code is alive')



