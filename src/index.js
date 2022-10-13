'use strict'

class Stack {
    constructor(maxSize = 10, ...arr) {
        this._maxSize = maxSize;
        this._size = 0;
        for (const item of arr) {
            this.push(item);
        }
    }

    get size() {
        return this._size;
    }

    get isEmpty() {
        return this._size === 0;
    }

    push(value) {
        if (this._size >= this._maxSize) {
            throw new RangeError('Stack overflow');
        }
        this[`_${this.size}`] = value;
        return ++this._size;
    }

    pop() {
        const lastItem = this[`_${this.size - 1}`];
        delete this[`_${this.size - 1}`];
        this._size--;
        return lastItem;
    }

    pick() {
        return this[`_${this.size - 1}`];
    }
}



function isSymmetricalBraces(string) {
    const stack = new Stack();
    const {braces} = options;
    for (const symb of string) {
        if (braces[symb]) {
            stack.push(symb);
            continue;
        }
        if(stack.isEmpty){
            return false;
        }
        const lastItemFromStack = stack.pick();
        const correctCloseBrace = braces[lastItemFromStack];
        if(symb === correctCloseBrace){
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.isEmpty
}

const braces = {
    '(':')',
    '{':'}',
    '[':']'
}

isSymmetricalBraces('[]({})', {braces})