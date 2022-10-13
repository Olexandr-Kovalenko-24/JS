'use strict'

class Queue {
    constructor(...args) {
        this._head = 0;
        this._tail = 0;
        for (const value of args) {
            this.enqueue(value);
        }
    }

    get size() {
        return this._tail - this._head;
    }

    enqueue(value) {
        this[`_${this._tail}`] = value;
        this._tail++;

        return this.size
    }

    dequeue() {
        if (this.size) {
            const firstItem = this[`_${this._head}`];
            delete this[`_${this._head}`];
            this._head++
            return firstItem;
        }
    }
}


function mergeQueues(q1, q2) {
    const mergeQ = new Queue();
    const maxLength = q1.size > q2.size ? q1 : q2;
    while (maxLength.size) {
        if (q1.size) {
            resQueue.enqueue(q1.dequeue())
        }
        if (q2.size) {
            resQueue.enqueue(q2.dequeue())
        }
    }

    return resQueue;
}