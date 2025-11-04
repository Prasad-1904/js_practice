// ES6

class User {
    constructor(userName, email, password) {
        this.userName = userName
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}hiskv56504jbv`
    }

    changeUserName(){
        return `${this.userName.toUpperCase()}`
    }
}

const prasad = new User("Prasad", "pra@eg.com", "123")

console.log(prasad.encryptPassword());
console.log(prasad.changeUserName());

// Behind the scenes

function Userone(userName, email, password) {
    this.userName = userName
    this.email = email
    this.password = password
}

Userone.prototype.encryptPassword = function () {
    return `${this.password}hiskv56504jbv`
}

Userone.prototype.changeUserName = function () {
    return `${this.userName.toUpperCase()}`
}

const geeta = new Userone("Geeta", "gt@eg.com", "1234")

console.log(geeta.encryptPassword());
console.log(geeta.changeUserName());

