const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user); // since resolve and then are connected so we can use user as parameter in them
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "hitesh", password: "123"})
        }else{
            reject(`ERROR: Something went wrong`)
        }
    }, 1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.username
}).then(function(username){
    console.log(username); // you can use as many then and catch as you want (chaining) it's just that the lower then will return upper then value 
}).catch(function(error){
    console.log(error); // Error handling ke liye catch use hota hai. and jb resolve ho jaata hai to then use hota hai
}).finally(function(){
    console.log("The promise is either resolved or rejected") // 'finally' this executes no matter what happens
})


// Another way of promises using Async-Await

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "javascript", password: "123"})
        }else{
            reject(`ERROR: JS went wrong`)
        }
    },1000)
})

async function consumerPromiseFive(){ // always returns a promise 
    try{
        const response = await promiseFive // waits till the promise is resolved 
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumerPromiseFive() // same whi kaam krta hai async-await bhi bss syntax alag hai jo shi lg rha woh yaad kr lo 


// https://jsonplaceholder.typicode.com/users

async function getAllUsers(){
    try{
        const response = await fetch ('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data)
    }catch(error){
        console.log("E: ", error);
    }
}
getAllUsers();


// By using then and catch

fetch('https://jsonplaceholder.typicode.com/users') // fetch immediately ek Promise<Response> return karta hai aur background me HTTP GET request bhejta hai.
.then((response) => {
    return response.json() // since string ke form mein by default data aata hai so to change them into json 
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))






