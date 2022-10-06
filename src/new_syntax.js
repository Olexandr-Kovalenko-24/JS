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
        const arr = new MyNewArray();
        for(let i = 0; i < this.length; i++){
        arr.push(callbackFunction(this[i]));
        };
        return arr;
    }
    concat (arr2) {
        for (let i = 0; i < arr2.length; i++){
            this.push(arr2[i]) 
        }
        return this;
    }

    flat () {
        const res = new MyNewArray();
        for (let i = 0; i < this.length; i++){
            if (MyNewArray.isNewArray(this[i])) {
                res.concat(this[i].flat());
            } else {
                res.push(this[i])
            }
        }
        return res;
    }
    reverse (){
        let len = this.length-1;
        for (let i = 0; i<=len/2; i++){
            let tmp = this[i];
            this[i] = this [len - i];
            this [len - i] = tmp;
        }
        return this;
    }
    indexOf (value){
        for (let i = 0; i < this.length; i++){
            if (this[i] === value) {
                return i
            }
        }
        return -1
    }
    includes (value){
        for (let i = 0; i < this.length; i++){
            if (this[i] === value) {
                return true
            }
        }
        return false
    }
    static isNewArray (obj) {
        return obj instanceof MyNewArray;
    }

    [Symbol.iterator] = function () {
        let i = 0;
        return {
            next: () => {
                return {
                    value: this[i++],
                    done: i > this.length
                }
            }
        }
    }
}



const narr = new MyNewArray
// [3,2,1,[2,1,[2,5,[2,3]]]]
MyNewArray.isNewArray(narr)