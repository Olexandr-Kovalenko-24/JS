class MyNewArray {
    constructor(){
        this.length = 0;
    }
    push () {
        for (let i = 0; i < arguments.length; i++){
            this[this.length] = arguments[i];
            this.length++;
        }
        return this.length;
    }
    pop () {
        const lastItem = this[this.length-1];
        delete this[this.length-1];
        this.length--;
        return lastItem;
    }
    forEach () {
        for(let i = 0; i < this.length; i++){
            callbackFunction(this[i], i, this);
    }
}
    map () {
        const arr = new MyArray();
        for(let i = 0; i < this.length; i++){
        arr.push(callbackFunction(this[i]));
        };
        return arr;
    }

    static isNewArray (obj) {
        return obj instanceof MyNewArray;
    }
}

const narr = new MyNewArray

MyNewArray.isNewArray()