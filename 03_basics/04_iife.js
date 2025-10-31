// immediately invoked function expression (iife)
// function that executes immedialy after declaration.
// used to prevent the polution of the global variables

// named iife
(function Hello() {
    console.log("hello");
    
})(); // semi colon after the end is mandatory. 
// if not given the function will not understant where to end.


// unnamed iife
( (name) => {
    console.log(`Hello, ${name}!!!`)
})("Prasad"); // arrow iife function.