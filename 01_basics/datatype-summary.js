// Primitive Datatype (pass by value variables)
// are of 7 types: String, Number, Boolean, null, undefined, Symbol(kisi bhi value ko unique bnane ke liye use krte hai. Meaning no other Symbol value will ever be strictly equal to it), BigInt(big values are denoted with this) 


// NOTE: JS is a dynamically typed language, this means that you don't need to specify the data type of a variable when you declare it


const score=100
const scoreValue=100.2

const isLoggedIn=false
const outsideTemp=null
let userEmail

const id = Symbol('123')
const anotherId=Symbol('123')
// console.log(id===anotherId) // guaranteed no two symbol values can be strictly equal



// Non-Primitive Datatype (pass by reference variables)
// 3 types: Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; //Array

let myObj = {
    name: "chitransh",
    age: 20,
} // object

const myFunction = function(){
    // console.log("hello world");
} // function

// console.log(typeof scoreValue)
// console.log(typeof isLoggedIn)
// console.log(typeof outsideTemp)
// console.log(typeof id)
// console.log(typeof myFunction)
// console.log(typeof myObj)
// console.log(typeof heros)


//------------------------------------------------------

// Stack (used in Primitive Datatypes)
// Heap (used in Non-Primitive Datatypes)

let myYoutubeName = "hitesh.com"
let anotherName=myYoutubeName
anotherName="chaiaurcode"

console.log(myYoutubeName)
console.log(anotherName)

// here the myYoutubeName does not change remains hitesh.com because it is primitive and those are pass by value so a copy is send and changes are only made in that


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email)
console.log(userTwo.email)

// here the change happens in userOne also because it is a non-primitive type so values are passed by reference 