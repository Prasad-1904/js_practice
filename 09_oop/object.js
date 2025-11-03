function Myultiply(num){
    return num*5
}

console.log(Myultiply(5));

// function is also object. so can act and be used as object
Myultiply.power = 2  
console.log(Myultiply.power);

// in js everything is essentially object. so prototype can be used. but as object is last step of the prototype it will be empty.
console.log(Myultiply.prototype); 


