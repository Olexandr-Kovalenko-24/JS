function squre(b) {
    return b*b;
}

function supperFun (number, fn) { //HOF
    fn(number); // callback function
}

supperFun(5, squre);