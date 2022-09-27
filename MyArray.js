'use strict'

function MyArray () {
    this.length = 0;

    this.push = function(value){
        this[this.length] = value;
        return ++this.length;
    }
    this.pop = function(){
        const lastItem = this[this.length-1];
        delete this[this.length-1];
        this.length--;
        return lastItem;
    }
    this.forEach = function(callbackFunction){
        for(let i = 0; i < this.length; i++){
        callbackFunction(this[i], i, this);
    }}

    this.map = function(callbackFunction){
        const arr = new MyArray();
        for(let i = 0; i < this.length; i++){
        arr.push(callbackFunction(this[i], i, this));
        };
        return arr;
    }
}

// function someFunction (currentValue, index, array){
//     console.log(currentValue);
// }