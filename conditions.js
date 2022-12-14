//bool

let userLoggedIn = true;

if (userLoggedIn) {
    console.log('User logged in!');
} else {
    console.log('Intruder alert!');
}


if (userLoggedIn) {
    let welcomeMessage = 'Welcome back!';
} else {
    let welcomeMessage = 'Welcome new user!';
}

console.log(welcomeMessage); // throws an error

// lists

let firstUser = {
    name: 'Will Alexander',
    age: 33,
    accountLevel: 'normal'
};

let secondUser = {
    name: 'Sarah Kate',
    age: 21,
    accountLevel: 'premium'
};

let thirdUser = {
    name: 'Audrey Simon',
    age: 27,
    accountLevel: 'mega-premium'
};

//switch cases

switch (firstUser.accountLevel) {
    case 'normal':
        console.log('You have a normal account!');
        break;
    case 'premium':
        console.log('You have a premium account!');
        break;
    case 'mega-premium':
        console.log('You have a mega premium account!');
        break;
    default:
        console.log('Unknown account type!');
}