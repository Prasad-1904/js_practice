// Function Definition

function addTwoNums() {
    const A = 10;
    const B = 29;
    console.log(A + B);
    
}

function add(A, B, C) {
    return A+B+C 
}

addTwoNums // reference
addTwoNums() // execution or function call
const result = add(3,4,5) 
console.log(result);


// values in funtion definition are parameters 
// values in function execution are arguments

function isEven(N) {
    if(!N){
        console.log("Enter Valid Number");
    }
    else if(N%2 === 0){
        return true
    }
    else{
        return false
    }
}

console.log(isEven(2));
console.log(isEven(3));
console.log(isEven());


// unknwon numbers of arguments
function numbers(...N) {
      return N       // on can give n numbers for arguments which will be  
                     // packaged in single bundle as array using ... (rest) operator. 
}

console.log(numbers(1,2,3,4,5,6,7,8,9)); // [1,2,3,4,5,6,7,8,9]

const user = {
    username : "Prasad123",
    email : "pkkr@eg.com"
}

function handleObnject(obj){
    console.log(`The username is ${obj.username} and the email is ${obj.email}`);
}

handleObnject(user)