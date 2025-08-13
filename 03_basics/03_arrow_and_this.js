const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`),
        console.log(this); // prints the current context of the object.
    }
}

user.welcomeMessage()
user.username = "sam" // overwrites the username in the object
user.welcomeMessage()

console.log(this) // this will print can empty object because there is not context on global scope yet. "THIS" is used to access the current context like in scope/object and all which is currently executing the function. In Node.js it does this 

// but if you do console.log(this) on inspect->console on a browser then you will get an global scope variable "WINDOW" since everthing happens on window in browser (click, select, copy, etc)


// AMAZING FACT: phle js sirf browsers pr run hoti thi because engine that it requires was only present in browsers but in future we extracted that engine and now they are known as V8 in chrome har browser ka alag engine hai Node.js V8 pr run krta hai. Zyada knowledge leni hai toh then prefer ChatGPT



// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai() // this will print undefined because this fucntion pr kaam nhi krta. Jab koi function direct call hota hai, this ka reference global object hota hai or global scope mein username milega hi nhi kyuki uska local scope hai isiliye "undefined"

// But, Jab function ko kisi object ke property ke through call kiya jata hai, to this ka reference wo object ban jata hai. Just like const user = {} upar wla case


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai() // declaring function by this method will also give undefined


// ARROW FUNCTION ( Syntax: () => {} )

const chai = () => {
    let username = "hitesh"
    console.log(this);
}
chai() // this will return an empty object {}. Arrow function apna khud ka this banata hi nahi. Wo apne lexical scope (jahan wo likha gaya hai) ka this le leta hai.


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// this arrow function will return sum accordingly

// const addTwo = (num1, num2) => num1 + num2 // another way of using arrow function known as CONCISE BODY ARROW FUNCTION 

// const addTwo = (num1 , num2) => (num1 + num2) // another way of using arrow function

const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo(3,4)) // print hitesh since it is an object therefore always should be in {}