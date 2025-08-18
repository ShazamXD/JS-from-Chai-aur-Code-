class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{ // extend is keyword does the same work as proto 
    constructor(username, email, password){
        super(username) // super is the keyword which does the same work as SetUsername.call(this, username) [this was in call.js] but easily
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.addCourse() // error becasue access hi nhi hai teacher ne inherit kra hai user se na ki user ne teacher se toh gives error 
masalaChai.logMe() // executes properly because logMe is a function of User

console.log(chai instanceof User); // true 