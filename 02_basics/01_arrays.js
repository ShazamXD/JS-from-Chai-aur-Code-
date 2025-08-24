// ARRAYS (prefer mdn docs for more knowledge)

// Array copy operation creates shallow copy instead of deep copy 

/* Shallow Copy : A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of 
the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to 
change too. That behavior contrasts with the behavior of a DEEP COPY, in which the source and copy are completely independent. */

const myArr = [0,1,2,3,4,5]
const Heros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1])


// Array Methods 

myArr.push(6)
myArr.pop()

myArr.unshift(9) // add 9 at the start of the array but rarely used because it puts too much load on the system since it has to shift all the index 
console.log(myArr)
myArr.shift() // removes the unshifted element from the array 
console.log(myArr)

console.log(myArr.includes(9)) // will return false since array does not contain element 9
console.log(myArr.indexOf(13)) // -1 since not in the array


const newArr = myArr.join()
console.log(myArr)
console.log(newArr) // what it does is after join the array datatype is changed from object to string 
console.log(typeof newArr)
console.log(typeof myArr)


// slice , splice

console.log("A ", myArr)

const myN1 = myArr.slice(1,3) // ending index is not included 

console.log(myN1)
console.log("B ", myArr);

const myN2 = myArr.splice(1,3) // ending index is included 
console.log(myN2)
console.log("C ", myArr)


/* 
so the first difference between slice and splice is the last index of range is excluded in slice but included in splice

and Second difference is slice does not modify the original array but splice does, it removes the spliced elements from the original array
*/


// FACT: JS is a single thread language everything inside it is a process
