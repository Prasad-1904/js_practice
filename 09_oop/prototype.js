let myName = "prasad"
console.log(myName.length);

let nameOne = "prasad    "
console.log(nameOne.length);

// create trueLength property which will give actual length like in case of nameOne should give 6

Object.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`The true length is: ${this.trim().length}`);
}

nameOne.trueLength()


// Inheritance 

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

