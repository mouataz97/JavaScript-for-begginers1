//declaration

const passengers = [
    {
        name: 'Will Alexander',
        ticketNumber: 209542
    },
    {
        name: 'Sarah Kate',
        ticketNumber: 169336
    },
    {
        name: 'Audrey Simon',
        ticketNumber: 779042
    },
    {
        name: 'Tau Perkington',
        ticketNumber: 703911
    }
]

const numberOfPassengers = 10;

for (let i = 0; i < numberOfPassengers; i++) {
    console.log('Passenger boarded!');
}

console.log('All passengers boarded!');

// using in loop



for (let i in passengers) {
    console.log('Boarding passenger ' + passengers[i]);
}

// using of loop

for (let passenger of passengers) {
    console.log('Boarding passenger ' + passenger.name + ' with ticket number ' + passenger.ticketNumber);
}

// using while

let seatsLeft = 10;
let passangersStillToBoard = 8;
let passangersBoarded = 0;

while (seatLeft > 0 && passangersStillToBoard>  0){
    seatsLeft--;
    passangersBoarded--;
    passangersStillToBoard--;
}

console.log(passangersBoarded + 'successfully on board!');