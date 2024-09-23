// let myName = "viahal      " 
// let myChannel = "rajputboss   "

// console.log(myName.truelength);


let myHeros = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.vishal = function(){
    console.log(`vishal is present in all objects`);
}

Array.prototype.heyVishal = function(){
    console.log(`Vishal says hello`);
}

// heroPower.vishal()
// myHeros.vishal()
// myHeros.heyVishal()

// heroPower.heyVishal()

// inheritance

const User = {
    name:"chai",
    email:"chai@gamil.com"
}

const Teacher = {
    makeVideo:true
}

const TeachingSupport = {
    isAvailable:false
}
const TASupport = {
    makeAssignment:"js assignment",
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User


// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername = "Chaiorcode  "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is:${this.trim().length}`);
}

anotherUsername.trueLength()
"vishal".trueLength()
"iceTea".trueLength()