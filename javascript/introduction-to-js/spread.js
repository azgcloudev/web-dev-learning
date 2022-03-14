const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Math.max(1, 2, 3, 4, 5, 6, 7, 8);
// result is 8

;
Math.max(numbers);
// result is undefined

Math.max(...numbers);
//result is 9



// ----- SPREAD WITH ARRAY LITERALS -----
let cats = ["isis", "peny"];
let dogs = ["zeus", "morgan"];

let allPets = [...dogs, ...cats];






// ----- SPREAD WITH OBJECTS -----
