let score = undefined

//console.log(typeof score)
//console.log(typeof (score))

let valueInNumber = Number(score) // convert whatever be the datatype of score be into number
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN (not a number) pr iska datatype number hi hota hai)(if a string like this or anything that can't be turned into number will display NaN)
// true => 1; false => 0
// null gives 0 as number datatype
// undefined gives NaN


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


//-----------------OPERATIONS---------------------------

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1+str2;
console.log(str3);

console.log("1"+2) // this will give 12 as output 
console.log("1"+2 +2) // this will give 122 as output because agar phle string aa gya toh saare aage string hi consider honge
console.log(1+ 2 + "2") // this will give 32 as output because last mein string hai toh starting operations as it is used honge



