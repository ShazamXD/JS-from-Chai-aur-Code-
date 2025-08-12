// OBJECTS

/* singleton: In JavaScript, a singleton is basically an object that can have only one instance during the entire execution of your program.

It’s like saying: "There will be only one king in the kingdom — if you try to make another, you just get the same king back."
*/

// Object Literals- most used way to create objects (key-value pair) does not make singleton

// here we are going to talk about object literal only

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",// symbol ka syntax yhi hota hai should always be used with square brackets without the brackets it will be considered as string
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email) // this is also a method to access object values 
console.log(JsUser["email"]) // as we know that in the background name,email and all are stored as string. So, this is also a method to access object values but u have to specify the datatype in square brackets 
console.log(JsUser["full name"]) // square bracket method is used more because if the value of key is in string then you can't access the value without the bracket method the dot methods fails to do so 

console.log(typeof JsUser[mySym]) // symbol should always be accessed with square brackets 


JsUser.email = "hitesh@chatgpt.com" // this will overwrite the key-value in objects
console.log(JsUser["email"])

// Object.freeze(JsUser) // this will freeze the object so that no changes can happen in the object

JsUser.email = "hitesh@microsoft.com"
console.log(JsUser["email"]) // again chatgpt wla email will be printed since freeze has been applied 
 

// Adding function to an object

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User ${this.name}`);
} // this keyword is used to refer to the object that is executing the current function because there must be number of object so to avoid confusion

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());