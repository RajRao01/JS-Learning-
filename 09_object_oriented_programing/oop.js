const user = {
    username: "vishal",
    loginCount: 8,
    signedIn:true,


    getUserDetails: function(){
        // console.log("Got user deatails from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}


// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise()
// const date = new Date()

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("Ajeet", 15 , true)
const userTwo = new User("Chai or Code", 11 , false)
console.log(userOne.constructor);
// console.log(userTwo);

// new keyword - new object created
// constructor fnction call for new keyword
// this keyword is injected Argument on the function
// function is generated output