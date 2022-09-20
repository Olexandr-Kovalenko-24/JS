const userDrink = prompt('Choose drink: \n1 - tea \n2 - coffe \n3 - juice');

switch (userDrink) {
    case '1': {
        console.log('tea');
        break;
    }
    case '2': {
        console.log('coffe');
        break;
    }
    case '3': {
        console.log('juice');
        break;
    }
    case '4': {
        console.log('watter');
        break;
    }
    case '5': {
        console.log('lemonad');
        break;
    }
    default:
        console.log('Don`t no that drink');
}


