'use strict'

function sumOfAllArg(){
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum;
}