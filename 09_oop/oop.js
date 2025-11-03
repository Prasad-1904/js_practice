const user = {
    username: "Prasad",
    loginCount: 4,
    signedIn: true,

    getUserDetails: function () {
        console.log("User Details");
        
    }
}

// console.log(user.getUserDetails());

const User = function (userName, loginCount, isLoggedIn) {
    this.userName = userName
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greet = function(){
        console.log(`Welcome ${this.userName}`);
        
    }
    return this
}

//const userOne = User("Prasad", 5, true)
// after this creating new instance will override the current one
// hence to avoid this we use "new" keyword as constructor to create new instance which will create a new context.
const userTwo = new User("Uma", 12, false)

//console.log(userOne);
console.log(userTwo);
console.log(userTwo.constructor);

