'use strict'

const vocabulary = new Map();
vocabulary.set('cat', 'кіт');
vocabulary.set('dog', 'пес');
vocabulary.set('eat', 'ёсти');
vocabulary.set('meat', `м'ясо`);



function translater(str,vocabulary){
    const wordArray = str.toLowerCase().split(' ');
    const resArray = [];
    for (const word of wordArray) {
        if(vocabulary.has(word)){
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





