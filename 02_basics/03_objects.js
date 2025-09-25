//singleton
//Object.create

// objects literals
const user = {
    name: "Prasad",
    age: 24,
    location: "Nashik",
    email: "pkkr@ex.com",
    isLoggedIn: false
}

console.log(user.email); 
console.log(user["email"]); 

// using symbol in object

const sym = Symbol("key1")

const user2 = {
    name: "Prakash",
    age: 24,
    location: "Nashik",
    email: "pkdr@ex.com",
    isLoggedIn: false,
    [sym] : "keyA"
}

console.log(user2[sym]);

// changing values
user.email = "pkkandalkea@gg.com"

// fixing or locking values
//Object.freeze(user)

user.email = "pkkr@mail.com"
// console.log(user);
// console.log(user2);


// adding functions to objects

user.greet = function() {
    console.log(`Hello, ${this.name}`);  
}

console.log(user.greet());


