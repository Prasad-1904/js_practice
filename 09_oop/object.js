function Myultiply(num){
    return num*5
}

console.log(Myultiply(5));

// function is also object. so can act and be used as object
Myultiply.power = 2  
console.log(Myultiply.power);

// in js everything is essentially object. so prototype can be used. but as object is last step of the prototype it will be empty.
console.log(Myultiply.prototype); 

// here this is similar to self in python
function createUser(userName, score){
    this.userName = userName
    this.score = score
}

createUser.prototype.increment = function () {
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`the score is ${this.score}`);
}

const prasad = new createUser("Prasad", 100)  // the new keyword 
const Ram = new createUser("Ram", 100)

prasad.printMe()  
// to use injected printMe property (or any other) must use 'new' keyword while creating objects.


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/