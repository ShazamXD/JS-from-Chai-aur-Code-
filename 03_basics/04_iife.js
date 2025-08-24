// Immediately Invoked Function Expressions (IIFE)

// JavaScript function jo turant hi run ho jaata hai jaise hi wo define hota hai, bina manually call kiye.

// why need IIFE ? Private Scope banane ke liye (Global scope pollution se bachne ke liye). 

// Syntax is very simple ()() first bracket is for defining function and second is for execution 

(function chai(){ // named iife
    console.log(`DB CONNECTED`);
})();

/* here semicolon is must to end the iife because if not then it won't be able to differentiate between functions and will consider everything after 
that a big function means will combine or consider all the later functions as one */


// Arrow function for iife 

( () => {
    console.log(`DB CONNECTED TWO`);
})();


// for passing parameters

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("hitesh");

