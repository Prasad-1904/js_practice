let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

//console.log(typeof myDate);

let newDate = new Date(2024, 0, 13) // months starts form zero
console.log(newDate.toLocaleString());

let aDate =  new Date("2-4-2025")
console.log(aDate.toLocaleString());

// for comparison convert into the mili-seconds
console.log(newDate.getTime());
console.log(aDate.getTime());
