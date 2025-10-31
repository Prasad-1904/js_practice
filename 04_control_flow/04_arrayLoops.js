// // forof loop
// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

// // Maps

// const map = new Map()
// map.set('IN','India')
// map.set('Fr','France')
// map.set('USA','America')


// for (const [key, value] of map) {
//     console.log(key,':',value);
// }

// // forof doesn't work for the objects

// // forin loop

// const obj = {
//     js: "javascript",
//     py: "python",
//     cpp: "c++",
//     rb: "ruby"
// }

// for (const key in obj) {
//     console.log(key);
//     console.log(obj[key]);
// }

// maps are not iteratale

const lang = ['python', 'js', 'cpp', 'java', 'ruby']

// lang.forEach( function (item) {
//     console.log(item);
// })

// lang.forEach((item) => {
//     console.log(item);
// })

// function printme(A) {
//         console.log(A);
// }

// lang.forEach(printme)

// lang.forEach((item, index, arr) => {
//     console.log(item, index, arr);
    
// })

const newLang = [
    {
        langName: "javascript",
        fileName: "js"
    },
    {
        langName: "python",
        fileName: "py"
    },
    {
        langName: "java",
        fileName: "java"
    }
]

newLang.forEach((item) => {
    console.log(item.langName);
})