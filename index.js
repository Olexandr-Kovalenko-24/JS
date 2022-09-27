'use strict'

// function sumOfAllArg(){
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++){
//         sum += arguments[i]
//     }
//     return sum;
// }

function Ladder () {
    this.currentStep = 0;
}

function LadderMethods () {
    this.up = function(){
        ++this.currentStep
    return this;
    }
    this.down = function(){
        --this.currentStep
    return this;
    }
    this.showStep = function(){
        return this.currentStep;
    }
}

const protoObj = new LadderMethods;
Ladder.prototype = protoObj;
// Ladder.prototype = new LadderMethods;
// lad1.up().down().down().up().up().showStep(); //1