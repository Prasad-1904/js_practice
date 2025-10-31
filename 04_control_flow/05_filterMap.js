// foreach

// const arr = ['one', 'two', 'three', 'four']

// const value = arr.forEach((i)=>{
//     console.log(i);
//     return i  // foreach does not return anything
// })

// console.log(value); // foreach does not return anything

const num = [1,2,3,4,5,6,7]

const newNums = num.filter((i)=> i>4)
// console.log(newNums);

// ----------------------------------------------------

const books = [
  {
    title: "The Alchemist",
    genre: "Fiction",
    publish_year: 1988,
    edition: "1st"
  },
  {
    title: "Clean Code",
    genre: "Programming",
    publish_year: 2008,
    edition: "2nd"
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    genre: "History",
    publish_year: 2011,
    edition: "3rd"
  },
  {
    title: "Atomic Habits",
    genre: "Self-help",
    publish_year: 2018,
    edition: "1st"
  },
  {
    title: "The Pragmatic Programmer",
    genre: "Programming",
    publish_year: 1999,
    edition: "2nd"
  },
  {
    title: "The Hobbit",
    genre: "Fantasy",
    publish_year: 1937,
    edition: "5th"
  },
  {
    title: "Deep Work",
    genre: "Productivity",
    publish_year: 2016,
    edition: "1st"
  },
  {
    title: "1984",
    genre: "Dystopian",
    publish_year: 1949,
    edition: "4th"
  },
  {
    title: "The Lean Startup",
    genre: "Business",
    publish_year: 2011,
    edition: "1st"
  },
  {
    title: "You Don’t Know JS",
    genre: "Programming",
    publish_year: 2015,
    edition: "1st"
  }
];


// const userBooks = books.filter((book)=> book.genre === 'History')
// const userBooks = books.filter((book)=> book.publish_year >= 2000)  // return not needed as we are not defining the scope
const userBooks = books.filter((books) => {
    return books.genre === 'Programming' && books.publish_year >= 2000
}) // return is needed as we are defining the scope.
//  console.log(userBooks);

// -------------------------------------------------------------------------------------------------------

// Map

const myNum = [1,2,3,4,5,6,7]

// const A = myNum.map((num) => num * 10)
// console.log(A);

//--------------------------------------------------------
// chaining

const A = myNum.map((num)=> num*10) //[10,20,30,40,50,60,70]
               .map((num)=> num/2.5)  // [4, 8, 12, 16, 20, 24, 28]
               .filter((num)=>num>10) // [ 12, 16, 20, 24, 28 ]

// console.log(A);

//-------------------------------------------------------------------

// reduce

const initialValue = 0

const sum = myNum.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);

console.log(sum)

