// only let and const follows scope properties and var don't that is why it is not used 

// Local Scope: when variable is declared inside {} then it dies outside that means you can't access that variable outside the {}

// Global Scope: when variable is declared outside {} then it's scope is considered as global means it can be accessed anywhere both inside and outside {}

var c =300
let a = 500
if(true){
    let a = 10
    const b = 20
    c = 30 // overwrites var c
   // console.log("INNER: ",a )
}
console.log(a)
// console.log(b)
console.log(c)


// Nested Scopes

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // nhi hoga scope ke bahar hai
    two() // if the above line was not commented then we won't reach to two() because it will give error in above line due to scope 
}
one() // don't have access to console because it is written inside two() and parent can't access child properties but visa-versa is true 



if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); // nhi hoga out of scope
}

// console.log(username); // out of scope 



//++++++++++++++++++++Hoisting++++++++++++++++++++++++++

// To be able to call function before it is declared is called Hoisting, lekin yeh sirf function declarations me kaam karta hai, function expressions me nahi.


console.log(addone(5)) // you can access this even before it's declaration because of hoisting

function addone(num){
    return num + 1
}

// addTwo(5) // you cannot access this because it is an function expression. jb koi function ek variable mein store ho toh use expression kehte hai
const addTwo = function(num){
    return num + 2
}