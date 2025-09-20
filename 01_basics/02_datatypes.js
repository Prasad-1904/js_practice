"use strict"; // treat all js code as newer version

// alert(1+3) // we are using node.js so cant directly use alert as in browser console

let name = "Prasad"
let age = 24
let isLoggedIn = false
const idA = Symbol("123")
const idB = Symbol("123")
let bigNum = 2376287687547895

console.log(idA == idB);  // each symbol is unique


// number: number data up to 2 to power 53
// bigint: very large number
// string: characters inside ""
// boolean: true and false
// null: standalone value empty value
// undefined: unknown
// symbol: uniqeness
// object:


console.log(typeof "prasad");
console.log(typeof age)
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof id);
console.log(typeof bigNum);




// Primitive 
// 7 types: Strings, Number, Boolean, null, undefined, Symbol, BigInt

// Reference (Non-Primitive)
// Array, Objects, Functions

const arrA = ["prasad", "ramesh", "sulekha", "madhura"]
let myObj = {
    name : "prasad",
    age : "22"
}

const myFunction = function(){
    console.log("Hello world");
    
}

console.log(typeof arrA);
console.log(arrA);
console.log(typeof myObj);
console.log(myObj);
console.log(typeof myFunction);
myFunction()


// Javascript is Dynamically Typed