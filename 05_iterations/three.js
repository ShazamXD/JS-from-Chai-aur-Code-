/* for of: The for...of loop in JavaScript is used to iterate over iterable objects — like arrays, strings, maps, sets, etc.
It gives you the values directly (not the indexes/keys).
*/

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps: stored in key-value form and duplicate of values does not print in may you will always get only unique values 


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // this will not get printed in output since it is duplicate value 


console.log(map);


for (const key of map) {
    // console.log(key);
}
// in this way you can print everthing in key-value form in an array


for (const [key, value] of map) {
    // console.log(key, ':-', value);
}
// now you can store key and value seperately instead of all being in an array

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);   
}
// now you will notice that in for-of loop the objects are not iterable because for-in loop is used for objects

