class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }

    static createId() {
        return `123`
    } // use static to restrict the access
}

const prasad = new User("Prasad")

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const geeta = new Teacher("geeeta", "geeta@email.com")

// console.log(geeta.createId()); // unacceptable
