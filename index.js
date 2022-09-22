let cat = {
    breed: "Blue Cheshire",
    name: 'Mussy',
    age: 3,
    weight: 10,
    color: 'grey',
    sleep: function () {
        console.log('I am sleeping')
    },
    eat: function () {
        console.log('I am eating')
    }
};

let catGirl = {
    breed: "Blue Cheshire",
    name: 'Jes',
    age: 3,
    weight: 8,
    color: 'black',
    sleep: function () {
        console.log('I am sleeping')
    },
    eat: function () {
        console.log('I am eating')
    }
};

cat.girlfriend = catGirl;


let windMy = {
    color: "White",
    open: function () {
        console.log('open window')
    },
    weight: 15,
}
let glass = {
    color: "Opaque",
    weight: 7,
    width: 1000,
    300: 'Sparta',
}
windMy.glass = glass;


let variable = 'color';
let num = 2;

cat[num];
cat[variable];




const weekPlan = {
    Mon: 'dantist',
    Tue: 'go to park',
    Wed: 'meet friends',
    Thu: 'learn',
    Fri: 'hard work',
    Sat: 'go to party'
}

function getWeekPlan (plan) {
    const userValue = prompt('Write the day of week');
    alert(plan [userValue])
}

getWeekPlan(weekPlan);
