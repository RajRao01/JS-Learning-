// singleton

// object literals

const mySym = Symbol("key1")
const jsUser = {
    name: "vishal",
    "full name":"vishal rao",
    [mySym]:"mykey1",
    age:20,
    location:"patna",
    email:"raj@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(jsUser[mySym])

jsUser.email = "vishal@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "vishal@gmail.com"
console.log(jsUser[mySym]);

jsUser.greeting = function(){
    console.log("hello JS user");
}


jsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
