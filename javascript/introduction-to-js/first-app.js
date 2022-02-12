console.log("Hello Chrome");


let dayNumber = parseInt(prompt("Enter a number from 1 to 7"));
const weekDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

// if; else if statements
if (dayNumber === 6) {
    console.log(`Today is ${weekDays[dayNumber - 1]}`)
} else if (dayNumber === 7) {
    console.log(`Today is ${weekDays[dayNumber - 1]}`)
} else if (dayNumber === 1) {
    console.log(`Today is ${weekDays[dayNumber - 1]}`)
} else if (dayNumber === 2) {
    console.log(`Today is ${weekDays[dayNumber - 1]}`)
} else if (dayNumber === 3) {
    console.log(`Today is ${weekDays[dayNumber - 1]}`)
} else if (dayNumber === 4) {
    console.log(`Today is ${weekDays[dayNumber - 1]}`)
} else if (dayNumber === 5) {
    console.log(`Today is ${weekDays[dayNumber - 1]}`)
} else {
    console.log("Your input is not a number between 1-7.")
}


//create password logic
let password = prompt("Please enter a new password")
//must be 6+ characters
//cannot includa a space
if (password.length >= 6) {
    if (password.indexOf(" ") === -1) {
        console.log("Valid password")
    }
} else if (password.indexOf(" ") !== -1) {
    console.log("No spaces are allowed");
} else if (password.length < 6) {
    console.log("Password must be at least 6 characters")
}




//Switch statement
let monthNum = 6;

switch (monthNum) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 6:
        console.log("June");
        break;
    default:
        console.log("I am consufed")

}


console.log("Good Bye!");