// const userDrink = prompt('Choose drink: \n1 - tea \n2 - coffe \n3 - juice');

// switch (userDrink) {
//     case '1': {
//         console.log('tea');
//         break;
//     }
//     case '2': {
//         console.log('coffe');
//         break;
//     }
//     case '3': {
//         console.log('juice');
//         break;
//     }
//     case '4': {
//         console.log('watter');
//         break;
//     }
//     case '5': {
//         console.log('lemonad');
//         break;
//     }
//     default:
//         console.log('Don`t no that drink');
// }

const dayOfMonth = Number(prompt('Write day'));

switch (dayOfMonth){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10: {
        console.log('First decade');
        break;
    }
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20: {
        console.log('Second decade');
        break;
    }
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30: {
        console.log('Thirst decade');
        break;
    }
    default: {
        console.log('Last decade');
    }
}

