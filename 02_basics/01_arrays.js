// array 

const arr = [0,1,2,3,4,5]
const arr1 = new Array(1, 4, 6, 8)

console.log(arr);
console.log(arr1);

// Array Methods

arr.push(6)
arr.pop()
//console.log(arr);

// arr.unshift(4)
// arr.shift()
// console.log(arr);
console.log(arr.includes(7));
console.log(arr.indexOf(7));

const newArr = arr.join()

// console.log(arr);
// console.log(newArr);


// slice method just cop[ies the sliced part does not change the array. last index is not consided iin the slice.
const arrA = arr.slice(1,3)
console.log("A ", arr);
console.log(arrA);

// splice method cuts of the spliced part from the array, changing the array. last index is considdered here.
const arrB = arr.splice(1, 3)
console.log("B ", arr);
console.log(arrB);









