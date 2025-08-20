class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
}

const hitesh = new User("h@hitesh.ai", "123")
console.log(hitesh.password);