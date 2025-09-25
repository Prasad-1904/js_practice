// two types of scope: blog and global
// globle: valid for entire code
// blog: valid only for the blog i.e inside {}

let A = 30
const B = 34

if(true){
    let A = 23;
    const B = 54;
    console.log(A); // will print 23
}

console.log(A);  // will print 30
console.log(B);

// var is not used as its always global scope.

//------------------------------------------

function one(){
    const username = "Prasad"
    function two() {
        const state = "Maharashtra"
        console.log(username)  // we can do this because the function two is in the scope of the variable username.
    }
    //console.log(state); // this can't be done as the state variable is only valid for fuinction two.
    two()
}
one()
// in short child function an access the variables of paremt functions but not the vice versa. 
//-------------------------------------------
// Hoisting

addone(3)  // valid
function addone(N) {
    return N+1
}

addtwo(5) // Invalid--> can not access before definition
const addtwo = function(N) {
    return N+2
}