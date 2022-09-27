'use strict'

function MyArray () {
    this.length = 0;

}

MyArray.prototype = new MyArrayMethods;
// const protoArrayObject = new MyArrayMethods();

function MyArrayMethods (){

    this.push = function(){
        for (let i = 0; i < arguments.length; i++){
            this[this.length] = arguments[i];
            this.length++;
        }
        return this.length;
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
        arr.push(callbackFunction(this[i]));
        };
        return arr;
    }
}

