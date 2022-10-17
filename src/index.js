'use strict'


function makeCounter() {
    let i = 0;
    return {
        increment: function(){
            return ++i;
        },
        decrement: function(){
            return --i;
        },
    }
}

function createAdder (n1){
    return function (n2){
        return n1=n1+n2;
    }
}

const createAdder = (n1) => (n2) => n1+=n2

createAdder(5)(7)