'use strict'

// const a = 'hello';
// console.log(a.endsWith('o'));
// console.log(a.indexOf('l'));
// console.log(a.repeat('3'));
// console.log(a.replace('el', 'ko'));
// console.log(a.());


const text = 'Я!вчу!джаваскрипт!';
console.log(text.replaceAll('!', ' ').trim());



function toUpFirstLater(string) {
    return string.at(0).toUpperCase()
        .concat(string.slice(1));

}


function checkSpam(string) {
    if (string.includes('viagra')
        || string.includes('XXX')
        || string.includes('buy')) { return true } else { return false }
}

function isSpam(str) {
    const spamWords = ['viagra', 'XXX', 'buy']
    for (let i = 0; i < spamWords.length; i++) {
        if (str.toLowerCase().includes(spamWords[i].toLowerCase())) {
            return true;
        }
    }
    return false;
}

function truncate(string, maxLength) {
    if (string.length > maxLength) {
        return string.slice(0, maxLength).concat('...')
    } else { return string }
}

const truncate2 = (string, maxLength) => string.length > maxLength ?
    string.slice(0, maxLength).concat('...') : string;


function isPalindrom(string) {
    return string.toLowerCase().split('').reverse().join('')
        === string.toLowerCase()
}


function vowelQuantityInString(string) {
    let counter = 0;
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < vowel.length; j++) {
            if (string[i] === vowel[j]) {
                counter++;
            }
        }
    }
    return counter;
}


// function vowelQuantityInString2(str) {
//     const vowel = ['a', 'e', 'i', 'o', 'u'];
//     return str.split('').filter((letter) => vowel.includes(letter)).length
// }

const vowelQuantityInString2 = (str) => str.split('').filter((letter) => ['a', 'e', 'i', 'o', 'u'].includes(letter)).length