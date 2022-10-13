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



function isSymmetricalBraces(string, braces) {
    const stack = new Stack(string.length);
    const closeBraces = Object.values(braces);
    for (const symb of string) {
        if (braces[symb]) {
            stack.push(symb);
            continue;
        }
        if(closeBraces.includes(symb) && stack.isEmpty){
            return false;
        }
        if(symb === braces[stack.pick()]){
            stack.pop();
        } else if(closeBraces.includes(symb) || braces[symb]){
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

isSymmetricalBraces('[]({})', braces)