'use strict'

function factorial (number){
    if (number === 1) {
        return 1;
    }
    return number * factorial (number -1);
}

function pow (base, power) {
    if (power === 1) {
        return base;
    } else {
        return base * pow(base, power - 1)
    }
    
}