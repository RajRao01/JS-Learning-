class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCource(){
        console.log(`A new cource was added by ${this.username}`);
    }
}

const chai = new Teacher("chai","chai@gmail.com","123")

chai.addCource()