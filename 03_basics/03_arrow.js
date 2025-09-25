// This keyword
// refers current context

const user = {
    userName : "Prasad",
    email : "pkk@eg.com",

    welcomeMessage : function() {
            console.log(`Welcome ${this.userName} to the website.`);
            console.log(this); // gives the current context or current function
            
            
    }
} // here the userNameis in the user object hence the this key word

user.welcomeMessage() // Welcome Prasad to the website.
user.userName = "Sara"
user.welcomeMessage() // Welcome Sara to the website.

console.log(this); // gives empty object 

function newFunction() {
    const abc = "ABC"
    console.log(this); // does not work for the function // 
}

newFunction()

const ABC = function(){
    const abc = "ABC"
    console.log(this.abc); // does not work for the function // undefined
}

ABC()

//---------------------------------------------
// Arrow function

const func = () => {
    const abc = "ABC"
    console.log(this); 
}

func()

const add = (A, B) => {
    return A + B
}

// the above function can also be written as bellow as there only sigle line of code
// also called as implicit return

const addAB = (A, B) => (A + B)

console.log(add(1,4)); // 5
console.log(addAB(1,4)); // 5

// if you want to return the object
const rObj = () => ({userName: "Prasad"})

console.log(rObj());
