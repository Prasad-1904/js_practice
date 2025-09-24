const employees = ["Amit", "Sagar", "Vijay"]
const workers = ["Sushant", "Chinmay", "Vishakha"]

// employees.push(workers)
// console.log(employees); //[ 'Amit', 'Sagar', 'Vijay', [ 'Sushant', 'Chinmay', 'Vishakha' ] ]

// const arr = employees.concat(workers)
// console.log(arr); // [ 'Amit', 'Sagar', 'Vijay', 'Sushant', 'Chinmay', 'Vishakha' ]

// const newArr = [...employees, ...workers]
// console.log(newArr); // [ 'Amit', 'Sagar', 'Vijay', 'Sushant', 'Chinmay', 'Vishakha' ]

// const difArr = [1, 2, 3, [4, 5, 6], 7, [6, [8, 9]]]
// const newDifArr = difArr.flat(Infinity) //give exact depth otherwise
// console.log(newDifArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(Array.isArray("prasad")) // false
console.log(Array.from("prasad")); //[ 'p', 'r', 'a', 's', 'a', 'd' ]
console.log(Array.from({name: "prasad"})); // [] : need to specify wheater to use key or value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

