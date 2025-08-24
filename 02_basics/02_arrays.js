const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)
/* console.log(marvel_heroes) // in this what happens is dc_heroes is pushed into marvel_heroes but as a element means whole array is considered as a 
element in marvel_heroes. This justifies the fact that anything(any datatype) can be stored in an array */
// console.log(marvel_heroes[3][2]) // if you want to access the hero from the dc_heroes which is an element in marvel_heroes on index 3


const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes) // if you have not stored it in a new array here "allHeroes" then it would have also displayed as in case of push


// But the most used method for joining multiple arrays is SPREAD OPERATOR

const allNewHeroes = [...marvel_heroes,...dc_heroes]
// console.log(allNewHeroes)


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
/* returns the array with subarrays in the same array means the depth is removed flat(depth) you can specify the depth here it should have been 2 for 
required array the good practice is to specify the depth but u can also use "Infinity" so it will removed whatever the depth array contains */ 
console.log(real_another_array);


console.log(Array.isArray("Hitesh")) // tells us if the input is array or not, here it returns false because it's a string 

console.log(Array.from("Hitesh")) // converts the input into array (isse array bna do)

console.log(Array.from({name: "hitesh"})) /* returns an empty array because it is not possible from it to convert an object into array because it gets 
confuse between what u want "An array of keys" or "An array of values" so u will have to specify that */


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // creates an array containing all the scores 