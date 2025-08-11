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
console.log(id===anotherId) // guaranteed no two symbol values can be strictly equal



// Non-Primitive Datatype (pass by reference variables)
// 3 types: Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; //Array

let myObj = {
    name: "chitransh",
    age: 20,
} // object

const myFunction = function(){
    console.log("hello world");
} // function

console.log(typeof scoreValue)
console.log(typeof isLoggedIn)
console.log(typeof outsideTemp)
console.log(typeof id)
console.log(typeof myFunction)
console.log(typeof myObj)
console.log(typeof heros)