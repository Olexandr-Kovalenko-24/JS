'use strict'

const arr1 = [2,7,5,1,9,-10];
const arr2 = [4,2,7,10];

const set1 = new Set(arr1.concat(arr2))
const res = [...new Set([...arr1, ...arr2])]



const map = new Map([[1, {username: 'john doe'}], 
[2, {username: 'janedoe'}], [3, {username: 
'alexdoe'}]]);

 
const resTask = [...map.entries()].map((cortege)=>{
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

const {name: {first,last}} = userObj;
const {auth: {pass}} = userObj;

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

const {sizes: {width: {value: widthValue}}, brightness: {value: brightnessValue}} = monitor;

function getDiagonal(monitor){
    const {sizes: {width: {value: widthValue}, height: {value: heigthValue}}} = monitor
    // return Math.sqrt(Math.pow(widthValue) + Math.pow(heigthValue))
    return Math.sqrt(widthValue**2 + heigthValue**2);
}

const {brightness, resolution, ...restOfObject} = monitor;



function consoleValue({target: {value, name}}){
    
}


function getFullName({name: {first, last}}){
    return `${first} ${last}`
}