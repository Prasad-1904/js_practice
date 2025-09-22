// Stack (primitive), Heap (non-primitive)

let name = "prasad"

let anotherName = name

// here the primitive datatypes are stored in the stacks. 
// when a new variable using same value as other variable (as shpwn above the value is coppied and stored in it.)

let userA = {
    name : "prasad",
    age : 25
}

let userB = userA

console.log(userB);

// here the datatype is non-primitive. 
// the value is stored in the Heap and the variable points to (referes to) the value in the heap.
// when the new variable is assigned with the same value it just refers to the same value in the heap.
// here the value is not coppied like primitive datatype hence aslo called reference datatypes. 


