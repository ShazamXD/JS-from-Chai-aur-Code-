let score = "33abc"

//console.log(typeof score)
//console.log(typeof (score))

let valueInNumber = Number(score) // convert whatever be the datatype of score be into number
//console.log(typeof valueInNumber)
//console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN (not a number) pr iska datatype number hi hota hai)(if a string like this or anything that can't be turned into number will display NaN)
// true => 1; fals => 0


let isLoggedIn = "hitesh";

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false (empty string if asked to convert into boolean will display false)
// "hitesh" => true (string with value will also display true)


let someNumber = 33;

let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)
