'use strict'

const NATIONALITIES = [
    'Ukraine',
    'Great Britain',
    'Germany',
    'France',
    'Spain'
];

function User(firstName, lastName, age, mail, isSubscribe = false, nationality) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.mail = mail;
    this.isSubscribe = isSubscribe;
    this.nationality = nationality;
}

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function createArrayOfUsers(quantity) {
    const userArr = []
    for (let i = 0; i <= quantity; i++) {
        let us = new User(`Name ${i}`, `LastName ${i}`, getRandomArbitrary(1, 100),
            `mail${1}.com`, Boolean(Math.round(Math.random())),
            NATIONALITIES[getRandomArbitrary(0,4)])
        userArr.push(us);
    }
    return userArr;
}

const arrUsers = createArrayOfUsers(50);



const fNameArray = arrUsers.map(function(userObj){
    return `${userObj.firstName} ${userObj.lastName}`;
});

arrUsers.sort(function(usA, usB){
return usA.age - usB.age
})

// console.table(arrUsers);

const filtered = arrUsers.filter(function (elem) {
    return elem.age >= 18 && elem.isSubscribe
})

const mail = arrUsers
.filter(function (elem) {
    return elem.age >= 18 && elem.isSubscribe
}).map(function (user) {
    return user.mail
})

const fullNameOfUkrainian = arrUsers
.filter(function(user){
    return (user.nationality === 'Ukraine') && user.isSubscribe
}).map(function(us){
    return `${us.firstName} ${us.lastName}`
})
// console.table(fullNameOfUkrainian);

arrUsers.forEach (function(user){
    return user.isSubscribe = true;
})
console.table(arrUsers);