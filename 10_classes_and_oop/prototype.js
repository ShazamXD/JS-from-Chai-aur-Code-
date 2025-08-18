// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
} /* now you have made a new function in object and since everyones parent is object(of array, string, class, function) therefore every
array, string and function also have new function named 'hitesh'. But, if you make new function in either three then they won't be applicable
to object or other two */

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()



// INHERITANCE

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport 
}

Teacher.__proto__ = User // inherits the properties of user into teacher 

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher) // modern syntax for __proto__ does the same inherits properties 



let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){ // mast new function bna diya string mein
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength() /* now, in this what will happen is ${this} will give you 'hitesh' kyuki wo hi current context ho gya hai kyuki usi ne 
.trueLength function ko call kiya hai and trueLength of 'hitesh'(6) will get printed because now every string can use the function trueLength() */
"iceTea".trueLength() // same as above