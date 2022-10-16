'use strict'

const arr1 = [2, 7, 5, 1, 9, -10];
const arr2 = [4, 2, 7, 10];

const set1 = new Set(arr1.concat(arr2))
const res = [...new Set([...arr1, ...arr2])]



const map = new Map([[1, { username: 'john doe' }],
[2, { username: 'janedoe' }], [3, {
    username:
        'alexdoe'
}]]);


const resTask = [...map.entries()].map((cortege) => {
    return `${cortege[0]} - ${cortege[1].username}`
})



const userObj = {
    name: {
        first: 'John',
        last: 'Doe'
    },
    age: 20,
    auth: {
        email: 'doe@gmail.com',
        pass: '1234'
    }
}

const { name: { first, last } } = userObj;
const { auth: { pass } } = userObj;

const monitor = {
    sizes: {
        width: {
            value: 30,
            scale: 'sm'
        },
        height: {
            value: 20,
            scale: 'sm'
        }
    },
    brightness: {
        value: 24000,
        scale: 'lux'
    },
    resolution: '4k'
}

const { sizes: { width: { value: widthValue } }, brightness: { value: brightnessValue } } = monitor;

function getDiagonal(monitor) {
    const { sizes: { width: { value: widthValue }, height: { value: heigthValue } } } = monitor
    // return Math.sqrt(Math.pow(widthValue) + Math.pow(heigthValue))
    return Math.sqrt(widthValue ** 2 + heigthValue ** 2);
}

const { brightness, resolution, ...restOfObject } = monitor;



function consoleValue({ target: { value, name } }) {

}


function getFullName({ name: { first, last }, ...restOfUser }) {
    console.log(restOfUser)
    return `${first} ${last}`
}




const arr = [1, 2, 3, 4, 5, 6];

const [firstElem, secondElem, , , fiveElement] = arr;

const [firstE, ...restArr] = arr;

function getStringOfCortege({ first, second }) {
    return `${first} - ${second}`
}

// const map = new Map([[1, {username: 'john doe'}], 
// [2, {username: 'janedoe'}], [3, {username: 
// 'alexdoe'}]]);
// [...map.entries()].map((cortege)=>{
//     return `${cortege[0]} - ${cortege[1].username}`
// })

[...map.entries()].map(([key, { username }]) => {
    return `${key} - ${username}`
})

const settings = {
    width: 200,
    height: 400,
    on: true,
}

function getSet({ width, height, on = false }) {
    console.log(`${width} ${height} ${on}`)
}

const us = {
    name: {
        first: 'Ricky'
    },
    passw: '1234'
}


const {
    name: {
        first: userFirstName,
        last: userLastName = 'Anonumus'
    },
    passw = 'qwerty' } = us;


    
function createVoc(str) {
    const map = new Map();
    for (const symb of str) {
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