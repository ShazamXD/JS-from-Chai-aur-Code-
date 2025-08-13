// FUNCTIONS

// function sayName(){
//     console.log("A")
//     console.log("N")
//     console.log("S")
//     console.log("H")
// }

// sayName() // if written without brackets then it will not print anything it will only acknowledge that yes the fuction with that name is present in the code


function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
}
const result = addTwoNumbers(3,5) // datatype can vary in the input and so does the output with it so we use if-else in function for confirming datatype
// console.log("Result: ", result)


function loginUserMessage(username = "sam"){
    if(!username){ // mean (username === undefined) 
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}


// console.log(loginUserMessage("")) // is empty string is passed then only "just logged in" is displayed as output

// console.log(loginUserMessage()) // if nothing is passed not even an empty string then it displays "undefined just logged in" in the output 

// console.log(loginUserMessage("hitesh")) // now it will display proper "hitesh just logged in"

// if (username == sam) is defined in the function then no whatever what "sam just logged in" will always get printed unless it is overwritten just like by "hitesh" here line 34 can also be overwritten by empty string line 30


// when your are making shopping cart in an website then you don't know how many items are going to be added to cart so for that 

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// here this "..." is knows as rest operator. It will keep adding the value you assign into an array

console.log(calculateCartPrice(200, 400, 500, 2000)) // "[500, 2000]" is printed because val1 goes to 200 and val2 goes to 400


const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject) // anyobject acts acts as a variable you can put name of the object currently executing the function
{
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

(handleObject(user)) // prints the back tick statement

// you can also declare the object with the handleObject like

handleObject({
    username: "hitesh",
    price: 399
})
 
// same output in both cases 


const myNewArray = [200, 400, 100, 600]

function returnSecondArray(getArray){
    return getArray[1]
}
// getArray also acts as a variable you can put the name of array currently executing the function

console.log(returnSecondArray(myNewArray))

// another method instead of declaring the array above seperately just like user object

console.log(returnSecondArray([200, 400, 1000]))
