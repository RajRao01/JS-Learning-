const user = {
    username:"vishal",
    price:999,
    wlcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
// user.wlcomeMessage()
// user.username = "sam"
// user.wlcomeMessage()

// console.log(this);
// function aam(){
//     let username = "vishal"
//     console.log(this.username);
// }


// aam()

// const aam = function () {
//     let username ="vishal"
//     console.log(this.username);
// }

const aam = () => {
    let username ="vishal"
    console.log(this);
}

// aam()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// const addTwo = (num1,num2) => num1 + num2

// const addTwo = (num1,num2) => (num1 + num2)

const addTwo = (num1,num2) => ({username: "vishal"})

console.log(addTwo(3,4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()