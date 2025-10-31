// for loop


for (let i = 1; i < 10; i++) {
    //const element = array[i];
    //console.log(`Table of: ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner Value: ${j} for the Outer value ${i}`);
        //const element = array[j];
        //console.log(i + '*' + j + '=' + i*j);
        
    }
    
}

//--------------------------------------------


const Arr = [1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i < Arr.length; i++) {
    const element = Arr[i];
    //console.log(element);
}

// break and comtinue

// for (let i = 1; i < 20; i++) {
//     if(i == 5){
//         console.log(`i is ${i}`); 
//         continue;   
//     }
//     console.log(i);
    
// }

// -------------------------------------------------------

// let index = 0
// while(index < 10){
//     console.log(index);
//     index = index + 1
// }

// ------------------------------------------------------

let score = 1
do {
    console.log(`the score is ${score}`);
    score ++
} while (score < 15);