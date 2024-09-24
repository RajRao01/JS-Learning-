class User {
    constructor(username){
        this.username = username
    }

 logMe(){
    console.log(`Username:${this.username}`);
 }

 static createId() {
    return`123`
 }
}
const vishal = new User("vishal")
// console.log(vishal.createId())


class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email

    }
}

const androidphone = new Teacher("androidphone","androidphone.com")
console.log(androidphone.createId());