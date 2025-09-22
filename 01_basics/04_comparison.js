// comparison operators: <, >, <=, >=, ==, != similar to python

console.log("1"<2);
console.log("1">2);
console.log();


// In above cases the Javascript convets the string into number

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log();

// in the line 10 the js converts the null into zero or NaN. Dont use this type of comparison anywhere

// in js '===' is used for strict comaparison. it also checks the datatype of the comparatives. 
// here no coversions will be done.

console.log("1"==1);
console.log("1"===1);

