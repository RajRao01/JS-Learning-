// #Primitive

// 7 types : String,Number,Boolean,null,undefiend,Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
// const bigNumber = 334567892334n
// Reference (non primitive)
// Arry,Object,Functions

const heros = ["shaktiman","naagraj","doga"];
let myObj = {
    name: "vishal",
    age:2,
}
const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof bigNumber);

console.log(typeof heros);

// https:262.ecma-international.org/5.1/#sec-11.4.3


// Stack (Premitive),Heap(Non primitive)

let myName ="raj"

let anothername = myName
anothername = "vishal"

console.log(myName);
console.log(anothername);


let userOne = {
    email : "user@google.com",
    upi : "vishal@ybl"
}
let userTwo = userOne

userTwo.email = "raj@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
