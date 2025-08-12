const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance) // specifically tells the datatype of variable in the output

console.log(balance.toString()) // since number has very few prototype properties and now it also has all the string prototype properties
console.log(balance.toString().length)
console.log(balance.toFixed(2)) // for value till this fixed decimal number


const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4)) // gives precised value till the defined number here 4


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')) // displays the value with commas by default has U.S. style like 100k (1,000,000) but we use en-IN for Indian


console.log(Math) // inspect->console pr saari prototype properties dikh jaayengi

console.log(Math.abs(-4)) // negative sign remove krdega and will always give +ve value 
console.log(Math.round(4.6)) // round of krdega here 5
console.log(Math.ceil(4.2)) // round off krdega to the ceiling meaning upar wla ya bigger number here 5
console.log(Math.floor(4.9)) // round of krdega to the floor meaning neeche wla ya smaller number here 4
console.log(Math.min(4,3,5,7)) // min doodh dega 
console.log(Math.max(4,3,5,8)) // max doodh dega 


console.log(Math.random()) // koi bhi random number display krdega but the number will always be between 0 and 1 in which 1 is excluded 

console.log((Math.random()*10)+1) // math.random()*10 can display max to 9.9999.. to avoid zero and make it include 10 so 1 is added for the same 

console.log(Math.floor(Math.random()*10)+1) // displays the lower single value 


// print any number jo ki min se bda ho aur max se chota
const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min + 1))+min)
// (max-min+1) kiya hai to avoid zero phir +min phir kiya so that min se toh always bda number hi aaye 
