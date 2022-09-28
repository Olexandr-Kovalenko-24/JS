'use strict'

function User(firstName, lastName, age, mail, isSubscribe = false) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.mail = mail;
    this.isSubscribe = isSubscribe;
}

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function createArrayOfUsers(quantity) {
    const userArr = []
    for (let i = 0; i <= quantity; i++) {
        let us = new User(`Name ${i}`, `LastName ${i}`, getRandomArbitrary(1, 100),
            `mail${1}.com`, Boolean(Math.round(Math.random())))
        userArr.push(us);
    }
    return userArr;
}

const arrUsers = createArrayOfUsers(50);
console.table(arrUsers);


const fNameArray = arrUsers.map(function(userObj){
    return `${userObj.firstName} ${userObj.lastName}`;
});

