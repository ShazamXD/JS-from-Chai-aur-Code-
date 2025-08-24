const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value") used to concat or add the string but not used in this syntax nowadays outdated should never use 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) // this is used nowadays more readable 


const gameName = new String('hiteshhc') // new keyword is used to evoke/use objects in js 

// you can get all the prototypes that you can apply on a string on the inspect->console and print any string, to make life easier some are:

console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-6,4) // the last index is not included, start index = -6 + 8(length)=2 and end before index 4 therefore output is "te"
console.log(anotherString) // negative number starts from behind/reverse order 

const newStringOne = "   hitesh   "
console.log(newStringOne)
console.log(newStringOne.trim()) // removes the whitespaces from the string also there is trimstart() and trimend() to remove the spaces from back and front specifically

const url = "https://hitesh.com/hites%20choudhary"
console.log(url.replace('%20','-'))

console.log(url.includes('sundar')) // includes or not. Checks whether it has "sundar" in it or not 

console.log(gameName.split('-'))
/*
split('-') looks for - in the string.
Breaks the string at each - and returns an array of substrings.

✔ Output:
[ 'call', 'of', 'duty' ]

✅ Key Points:

If the separator is not found, the entire string is returned as a single-element array.
console.log("hello".split('-')); // [ 'hello' ]

If you use '' (empty string) as the separator, it splits every character:
console.log("game".split('')); // [ 'g', 'a', 'm', 'e' ]

You can also limit the number of splits:
console.log("a-b-c-d".split('-', 2)); // [ 'a', 'b' ] */