console.log("******************")
console.log("Welcome to arrays")

// const weekDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
let lottoNumbers = [21, 3, 17, 31, 10, 37];

console.log(lottoNumbers[0]) //will get the index 0 of the array --> 21

//can edit a value
lottoNumbers[3] = 7; // [21, 3, 17, 7, 10, 37]
console.log(lottoNumbers);

lottoNumbers.push("last value at the end");
console.log(lottoNumbers);

lottoNumbers.pop();

let nextNumber = lottoNumbers.shift();
console.log("shift(): ", lottoNumbers);

lottoNumbers.unshift("VIP");
console.log("unshift(): ", lottoNumbers);

//array methods
// .concat() -->concatenate 2 arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let concatArray = array1.concat(array2);

array1.includes(5);

array1.includes(3);

array1.indexOf(3);

// .slice()
let chunkWeek = weekDays.slice(1, 5);
console.log("slice(): --> ", chunkWeek);

// .splice()

let spliceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
spliceArray.splice(2, 4, "ii", "iv", "v", "vi");
// spliceArray would be ==> [1, 2, 'ii', 'iv', 'v', 'vi', 7, 8, 9, 10]

// multi dimensional arrays
let multiArray = [1, 2, ["i", "ii", "iii", ["a", "b", "c", "d"]], 3, 4];
console.log(multiArray[2][3][3]);