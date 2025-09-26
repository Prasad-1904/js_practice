const userEmail = "pkk@gmail.com"

if (userEmail) {
    console.log("got user");
} else {
    console.log("no user");
    
}

// here no comparison done but the userEmail string is considered as true

// Falsy Values (the values that are considered false)
// false, 0, -0, null, undefined, "", BigInt 0n, NaN

// Truthy Values
// true, 
// all strings execpt empty: '0', 'false'
// Arrays and objects: [], {} are true
// function (){} is true
