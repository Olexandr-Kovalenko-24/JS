// let user = {
//     firstName: 'Alex',
//     lastName: 'Kovalenko',
//     age: 24,
//     email: '22.com',
// }

// // console.log(user.age)

// for (let key in user) {
//     console.log(key +' '+ user[key])
// }


// let obj = {
//     a: 1,
//     b: 2,
//     c: 5,
//     d: 7,
//     e: 9,
//     f: 'hey',
// }

// let res = 0;
// for (let key in obj) {
//     if(typeof obj[key] === 'number'){
//     res += obj[key]
//     }
// }
// console.log(res);


let obj1 = {
    a: 1,
    b: 2,
    c: 5,
};
let obj2 = {

};

function isEmpty(obj) {
    for (const key in obj) {
        if (key) {
        } return false
    }
    return true
}
