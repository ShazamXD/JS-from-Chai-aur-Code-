// when two different datatypes are compared 
console.log("2" > 1)
console.log("02" > 1)
// this most of the times is not predictable gives different response so always try to compare similar datatypes 


console.log(null>0)
console.log(null==0)
console.log(null>=0)
// equity check(==) and comparisons > < >= <= works differently. Comparison convert null to a number, treating it as 0. That's why in (3)null>=0 is true and (1)null>0 is false 

// same happens for 'undefined' but all the statement return false since it's number datatype value is NaN


console.log("2"===2);
// === (strict compare operator) also compares the datatype
