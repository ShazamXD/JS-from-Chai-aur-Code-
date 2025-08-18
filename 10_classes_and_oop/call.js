function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username) // SetUsername.call(this, username) → “Run SetUsername, but make sure it sets username on this same object that createUser is building.
    // setUsername is out of the stack after it's completion but we pass it's reference here because we want it in our createUser function
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);

/* .call is a built-in method in JS for functions.

It lets you manually set what this should be inside the function when calling it.*/