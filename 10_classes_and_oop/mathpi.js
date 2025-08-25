const descripter = Object.getOwnPropertyDescriptor(Math, "PI") // gives 3 properties it is writeable, enumerable and configurable

// there you cannot overwrite the value of PI

console.log(descripter);

console.log(Math.PI);
Math.PI = 5
console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', { // defineProperty(object, property)
    //writable: false,
    enumerable: true, // you can also change these properties of an object
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    } 
}

/*
Object.getOwnPropertyDescriptor(object, propertyName)
👉 It returns an object that describes the details (metadata) of a property on another object.

These details are things like:

value → the property’s value

writable → can we change the value?

enumerable → will it show up in loops like for...in?

configurable → can we delete or re-define it?
*/