const appUser = new Object()

appUser.id = 123
appUser.name = "Ram"
appUser.email = "ram@eg.com"

console.log(appUser);

// can use obnjects inside objects
const newApp = {
    contact: 9876543210,
    fullName: {
        firstName: "Ram",
        lastname: "Kulkarni"
    }
}

console.log(newApp);
console.log(newApp.fullName?.firstName); // if full name does not exist, ? is used for the check

const obj1 = {1: 'a', 2: 'b', 3: 'c'}
const obj2 = {4: 'b', 5: 'd'}

const obj3 = {obj1, obj2}

console.log(obj3); // object of the objects


//------------------------------------------------
// can unpack the objects by using following 

//const obj4 = Object.assign(obj1, obj2) // also works
const obj4 = Object.assign({}, obj1, obj2) // better use like this as first parameter is target and others are source. 
console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'b', '5': 'd' }

//spread operetor

const obj5 = {...obj1, ...obj2}  // recomended 
console.log(obj5); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'b', '5': 'd' }

//--------------------------------------
// from databaseb the data comes ass array of the objects 

const users = [
    {
        userId: 1,
        email: "pkk@eg.com"
    },
    {
        name: "prasad",
        username: "pkk123"
    }
]  // array of the objects

// fetching values from it
console.log(users[1].name);

//--------------------------


console.log(appUser);
console.log(Object.keys(appUser)); // gives array of keys
console.log(Object.values(appUser)); // gives array of the values
console.log(Object.entries(appUser)); // gives the array of key value pair as an array

console.log(appUser.hasOwnProperty('isLoggedIn')); // checkes if the object has such property

//----------------------------------------

// extracting values, destructuring

const course = {
    courseName: "JavaScript",
    price: 999,
    courseTeacher: "J. Raman"
}

const {courseTeacher: teacher} = course
console.log(teacher); 
// so as to not repetedly use the course.courseTeacher. We can just use teacher for it.
//---------------------------------------

// apis use json 
// json is object 
// {   
//     "id": "1234"
//     "name": "prasad"
// }