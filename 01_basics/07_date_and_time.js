// DATES

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())

console.log(typeof myDate) // object hai

// let myCreateDate = new Date(2023, 0, 23) // the format is defined in the bracket in which we want to display the date also you can notice in single digits months starts from 0 i.e. JAN = 0 
// console.log(myCreateDate.toDateString())

// let myCreateDate = new Date(2023, 0, 23, 5, 3)
let myCreatedDate = new Date("01-14-2025")
// since double digits therefore JAN = 01
// console.log(myCreateDate.toLocaleString())




let myTimeStamp = Date.now()
// console.log(myTimeStamp) // displays in millisecond from the date 1 Jan 1970 read on mdn docs. This date is considered as the global starting point 

// console.log(myCreatedDate.getTime())

console.log(Date.now()) // abhi ka time dega but in milliseconds
console.log(Date.now()/1000) // ab in sec dega 
console.log(Math.floor(Date.now()/1000)) // decimal remove krne ke liye 


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1) // +1 so that the end user do not get confuse because of the zero indexing 
console.log(newDate.getDay())
