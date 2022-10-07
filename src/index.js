'use strict'


class Student {
    constructor(name, lastName, yearIn){
        this.name = name;
        this.lastName = lastName;
        this.yearIn = yearIn;
    }

    getCourse () {
    new Date().getFullYear()- this.yearIn
    }
}

function getSeason(){
    const month = new Date().getMonth();
    if(month <= 1 || month === 11){
        return 'winter'
    } else if (month >=2 && month <=4){
        return 'spring'
    } else if (month >=5 && month <=7) {
        return 'summer'
    } else { 
        return 'fall'
    }
} 


function getSeason2(){
    const month = new Date().getMonth();
switch(month) {
    case 0:
    case 1:
    case 11:
        return 'winter';
    case 2:
    case 3:
    case 4:
        return 'spring';
    case 5:
    case 6:
    case 7:
        return 'summer';
    case 8:
    case 9:
    case 10:
        return 'fall';
    default:
        return null;
}
}

const date = new Date()
console.log (`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`)
