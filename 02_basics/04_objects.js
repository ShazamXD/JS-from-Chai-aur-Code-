// const tinderUser = new Object() // this is an singleton object means same object naam ka doosra nhi bn skta. Ye ensure karta hai ki same 
// resource / settings / state sab jagah share ho rahi ho.

const tinderUser = {} // this is non-singleton or object literal

//console.log(tinderUser) // both on output will give the same '{}' (empty object)

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser)


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname) // you can go as deep as you want in this chained object by just using dot operation


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}

// methods to join objects

// const obj4 = {obj1, obj2}
// console.log(obj4)

// const obj4 = Object.assign({}, obj1, obj2, obj3) // object.assign(target, sources...)
// console.log(obj4)

/* '{}' is used as an empty target object so that the original objects (obj1, obj2, obj3) don’t get modified.

If you don’t use {}, obj1 becomes the target.

All properties from obj2 and obj3 will be copied into obj1 itself (mutating it).

*/


// but most widely used is SPREAD OPERATOR 

const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4)

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
] // arrays ki form mein objects stored hai 

// then to access the object values
console.log(users[1].email) // multiple users(0bjects) are separated by commas in array 'users'


console.log(tinderUser)

console.log(Object.keys(tinderUser)) // saari keys ko array ki form mein display krdeta hai

console.log(Object.values(tinderUser)) // same as above

console.log(Object.entries(tinderUser)) // this will display key-value pair in pairs in the form of array like [[id,1],[name,sammy],[loggedin,false]]


console.log(tinderUser.hasOwnProperty('isLoggedIn')) // tells whether object has this property or not in boolean 



// De-Structure Object (pulling out specific properties into variables in one line instead of manually accessing them)

const course = {
    courseName: "JS in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor} = course
/*
{courseInstructor} means:
Look for courseInstructor property in course.
Create variables courseInstructor with those values.
*/
console.log(courseInstructor) // now instead of writing course.courseInstructor you can write only courseInstructor still get the same result 

const {courseInstructor: instructor} = course
console.log(instructor) // now with only instructor you will get the same output  