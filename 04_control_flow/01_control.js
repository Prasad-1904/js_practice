// if and else
//syntax
// if (condition) {

// }

if (2 == '2') {
    console.log("executed");
} // will run because == operater will change the datatype
// Use === for srtict check


const num = 19

if ( num % 2 == 0 ) {
    console.log("the number is even.");
} else {
    console.log("the number is odd.");
}

const digit = 1999

if (digit < 1000) {
    console.log("greater than 1000");
} else if (digit > 2000) {
    console.log('the digit is 1999');
} else {
    console.log('the digit is in between 1000 and 2000');
    
}

// shorthand if

const bal = 1000

if (bal > 500) console.log("test");

// multiple conditions 

const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard) {
    console.log("Allow");
} else {
    console.log("not allowed");
    
}

// && for and // || for or 

//-------------------------------------------

// Switch Case
// Syntax
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;
    case 4:
        console.log("Apr");
        break;
    default:
        console.log("no match");
        break;
}

//---------------------------------------------------

// Nullish Coalesing Operatoer (??): null and undefined

let val;
val = 5 ?? 10
let val2 ;
val2 = null ?? 20
let val3;
val3 = undefined ?? 32

console.log(val); 
console.log(val2); // instead of null stores 20
console.log(val3); // instead undefined stores 32

// this is done to handle errors caused by null or undefined


// -------------------------------------------------

// Turnery Operator

const prize = 100

prize < 80 ? console.log("less than 80") : console.log("more than 80");




