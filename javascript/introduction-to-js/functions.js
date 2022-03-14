// Implicit functions

const add = (x, y) => (x + y);

const reduce = (x, y) => x - y;



//setTimeOut
//    run after the time
console.log("first log");
setTimeout(function () {
    console.log("function expression after 3 seconds");
}, 3000);
console.log("In the middle log")
setTimeout(() => {
    console.log("arrow fucntion expression after 6 seconds");
}, 6000);
console.log("The last log");


// setInterval
//call a function between the same interval
// const thinking = setInterval(() => {
//     console.log(Math.random());
// }, 2000)

// clearInterval(id); // is use to stop an interval, which needs to be assig first to a function




// filter methods
const numList1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const oddsNums = numList1.filter(x => {
    return x % 2 !== 0;
});




// ****** Some & Every methods ******

numList1.every(number => number > 0)
//true
numList1.every(number => number > 1)
//false
numList1.every(number => number === 3)
//false
numList1.some(number => number === 3)
//true



const numList2 = numList1.map(x => x);




// -------reduce method------
numList2.reduce((acc, acce) => {
    return acc + acce;
})

let cart = [9.99, 3.99, 5, 7.99, 25.99, 100, 19999, 2]

const total = cart.reduce((total, price) => {
    return total + price;
})


const lowestPrice = cart.reduce((min, max) => {
    if (min < max) {
        return min
    }
    return max;
})