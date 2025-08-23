// getter and setter works together if one is used then other must also have to be used for proper functioning 

class User {
    constructor(email, password){
        this.email = email; // this runs the setter for email
        this.password = password // this ru rd 
    }

    /* if you directly use this.password and this.email in get and set then it will cause an infinite loop because
    race will start between constructor and setter on which will set the value first so to avoid this loop we store
    value in a different property name like this._password and this._email */

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value // Here the real value is saved 
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);