// Primitive types
/*
Number
String
Boolean
Null
Undefined
*/



/* NUMBER */
100;
56;
21;
- 5;
123.12;

//Math operators
//PEMDAS
4 + 5;
12 * 4;
12 / 8;
10 % 2;
1234 - 12;
2 ** 2;
let guess = Math.floor((Math.random() * 20));

//NaN (Not a NUmber) is considered a number
// 0/0 = NaN
// 1+NaN = NaN
typeof (NaN); //'number'


/* String */
let stringName = "String Name";
let username = "    azgcloudev  ";
username.trim(); //method removes the spaces before and at the end
stringName.length //string property to know the lenght of characters
//arguments   syntax: variable.method(argument);
pets.indexOf('d'); //used to know in the string contains what is in the argument
//3

pets.indexOf('cats');
//-1

let name = "aldair zamora";

name.slice(2, 4)
//'da'
name.slice(-1)
//'a'
name.replace('r', 'R');
//'aldaiR zamora'
name.replaceAll('a','A');
//'AldAir zAmorA'


/* VARIABLES */
// let variableName = value;
let myName = "Aldair";
let boysNum = 12;
let girlsNum = 23;
let totalPeople = boysNum + girlsNum;
totalPeople += 15; //This will add 15 to totalPeople and will be the new value of the variable
let numLives = 3;
numLives--; //Will decrement the current value after the line

// const & let
// with 'const' you cannot change/edit the value of the variable
// with 'let' you can edit the variable value in the future
const pi = 3.14;
const squareArea = 56 * 2;






/* COMPARISON OPERATORS */
// > < >= <= == != === !==





/* if statements */
let rating = 6;

if (rating === 6) {
    console.log("rating is six")
}