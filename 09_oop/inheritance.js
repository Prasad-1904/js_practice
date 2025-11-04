class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const prasad = new Teacher("Prasad", "pras@email.com", "1234")

console.log(prasad.addCourse());
console.log(prasad.logMe());


console.log(prasad instanceof Teacher);
console.log(prasad instanceof User);