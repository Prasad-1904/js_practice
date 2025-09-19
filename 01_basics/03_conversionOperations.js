let score = "33acd"

console.log(typeof score) 

let valueInNumber = Number(score)

console.log(typeof valueInNumber) 
console.log(valueInNumber);
console.log(typeof NaN);

let scoreA = null
let valueInNumberA = Boolean(scoreA)
let valueInNumberB = String(scoreA)
let valueInNumberC = Number(scoreA)

console.log(valueInNumberA);
console.log(valueInNumberB);
console.log(valueInNumberC);
