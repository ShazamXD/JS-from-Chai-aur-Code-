// CONTROL FLOW 

const userEmail = "hitesh@gmail.com"

if (userEmail) { // since userEmail given hai toh no comparison required therefore a truthy value
    console.log("Got user email"); // it get printed 
} else {
    console.log("Don't have user email");
}

// Falsy values

// Only 7 values in JavaScript are falsy — they behave like false when converted to a Boolean:

// false — the boolean value false

// 0 — the number zero

// -0 — negative zero

// 0n — BigInt zero

// "" — empty string

// null — absence of any value

// undefined — variable declared but not assigned

// NaN — Not a Number



// Everything else in JavaScript is truthy — they behave like true when converted to a Boolean.

// Examples:

// true

// Any non-zero number (1, -1, 3.14)

// Any non-empty string ("hello", "0", "false")

// Objects ({}, [], function() {})

// Dates (new Date())



// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
} 
// "object.keys(emptyObj)" returns an array of keys then we check it's length by doing ".length" to tell whether the object is empty or not  


// NULLISH COALESCING OPERATOR(??): The nullish coalescing operator ?? in JavaScript is used to provide a default value only when the left-hand side is null or undefined because null and undefined is considered as something wrong with the code

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20 // returns the first value it encounters ignoring null and undefined 

console.log(val1)


// TERNIARY OPERATOR  

// Syntax: condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

// true hai toh run pehla console statement or false hai toh run doosra console statement 

