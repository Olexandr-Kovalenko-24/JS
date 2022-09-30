'use strict'

// const a = 'hello';
// console.log(a.endsWith('o'));
// console.log(a.indexOf('l'));
// console.log(a.repeat('3'));
// console.log(a.replace('el', 'ko'));
// console.log(a.());


const text = 'Я!вчу!джаваскрипт!';
console.log(text.replaceAll('!', ' ').trim());



function toUpFirstLater(string){
    return string.at(0).toUpperCase()
    .concat(string.slice(1));

}


function checkSpam(string){
    if (string.includes('viagra')
    || string.includes('XXX')
    || string.includes('buy'))
    {return true} else{return false}
}

