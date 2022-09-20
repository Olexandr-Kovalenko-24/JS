const userDrink = prompt('Choose drink: \n1 - tea \n2 - coffe \n3 - juice');

switch (userDrink) {
    case '1':
        console.log('tea');
    case '2':
        console.log('coffe');
    case '3':
        console.log('juice');
    case '4':
        console.log('watter');
    case '5':
        console.log('lemonad');
    default:
        console.log('Don`t no that drink');
}


