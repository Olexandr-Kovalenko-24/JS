let user = {
    firstName: 'Alex',
    lastName: 'Kovalenko',
    age: 24,
    email: '22.com',
}

// console.log(user.age)

for (let key in user) {
    console.log(key +' '+ user[key])
}