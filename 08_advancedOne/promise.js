const promiseOne = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("Promise One");
        resolve()
    }, 5000)
})

promiseOne.then(()=>{
    console.log("Promise One Resolved");
    
})

new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("Promise Two");
        resolve()
    }, 4000)
}).then(()=>{
    console.log("Promise Two Resolved");
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve({username: 'Prasad', email: 'pra@eg.com' })
    }, 3000)
})

promiseThree.then((user) => {
    console.log(user); 
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let err = true
        if (!err) {
            resolve({username: "Prasad", password: 1234})
        } else {
            reject("ERROR: User not found")
        }
    }, 2000)
})

promiseFour.then((user) => {
    console.log(user)
    return user.username
}).catch((err) => {
    console.log(err);
    
})

promiseFour.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username);    
}).catch((err) => {
    console.log(err); 
})

promiseFour.then((user) => {
    console.log(user)
    return user.username
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("The Promise Four is either resolved or rejected");
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let err = true
        if (!err) {
            resolve({username: "javascript", password: 12345})
        } else {
            reject("ERROR: User not Found")
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function proprties() {
//     try {
//         const response = await fetch('http://127.0.0.1:8000/api/properties/')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
        
//     }
// }

// proprties()

fetch('http://127.0.0.1:8000/api/properties/').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})

