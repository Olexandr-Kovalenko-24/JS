'use strict'

const vocabulary = new Map();
vocabulary.set('cat', 'кіт');
vocabulary.set('dog', 'пес');
vocabulary.set('eat', 'ёсти');
vocabulary.set('meat', `м'ясо`);



function translater(str, vocabulary) {
    const wordArray = str.toLowerCase().split(' ');
    const resArray = [];
    for (const word of wordArray) {
        if (vocabulary.has(word)) {
            resArray.push(vocabulary.get(word));
        } else {
            resArray.push(word);
        }
    }
    return resArray.join(' ');
}


const user1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    email: 'test@gmail'
}

const user2 = {
    firstName: 'Jane',
    lastName: 'Snow',
    age: 25,
    email: 'test2@gmail'
}

const johnMassage = ['hello', 'how a y', 'go to walk'];
const janeMassage = ['hi', 'i m fine', 'go!'];


const mapMessage = new Map();
mapMessage.set(user1, johnMassage);
mapMessage.set(user2, janeMassage);


function createVoc(str) {
    const map = new Map();
    for (const symb of str1) {
        if (map.has(symb)) {
            const currValue = map.get(symb)
            map.set(symb, currValue + 1)
        } else {
            map.set(symb, 1)
        }
    }
}

function compareString(str1, str2) {
    const map1 = createVoc(str1);
    const map2 = createVoc(str2);

    if (map1.size !== map2.size) {
        return false
    }

    for (const key of map1.keys()) {
        if (map1.get(key) !== map2.get(key)) {
            return false
        }
    }
    return true
}
