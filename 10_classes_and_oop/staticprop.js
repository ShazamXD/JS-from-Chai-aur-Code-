class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){  // the static keyword is used inside classes to define methods or properties that belong to the class itself, not to instances of the class.
        return `123`
    }
}

const hitesh = new User("hitesh") // an instance if class User 
console.log(hitesh.createId()); // will not get printed in output will show "not a function"