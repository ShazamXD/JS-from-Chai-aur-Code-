const UserProfile = {
    username: "Hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database"); 
        // console.log(`Username: ${this.username}`); 
        /* if you would have written only username without 'this' 
        keyword then it would have given an error that username not defined. Since, we know that each function
        created it's own execution context in js engine and to excess values from outside we use .this keyword
        for indicating current context variables/data. Exampel: Monday toh monday hai pr kis week ka monday ??
        so that is told using .this keyword current context */
        
        // console.log(this); // will print current context details 
    }
}
    // console.log(User.username)
    // console.log(User.getUserDetails());
    // console.log(this); /* this will give empty object because global context contains nothing as of now but
                          //  in case of browser since there is Window object 


// CONSTRUCTOR FUNCTION ('new' keyword in js is a constructor function) provides new instance(empty object) everytime

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false) /* if both userOne and userTwo were not declared using 'new' keyword then they would have 
overwritten each other so that's why new keyword provides them a copy on which they can work on seperately and individually */
console.log(userOne.constructor); // print function 'User' 
console.log(userTwo); 






