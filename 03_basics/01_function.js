
function sayMyName(){
    console.log("V");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("L"); 
}

//sayMyName()

// function addTwoNumber(number1,number2){//parameter
//     console.log(number1 + number2);
// }

function addTwoNumber(number1,number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumber(3,5)//arguments

// console.log("Result",result)

function loginUserMessage(username = "sam"){
    // if(username === undefined){
        if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("vishal"))
// console.log(loginUserMessage("vishal"))

function calculateCartPrice(val1, val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000))

const user = {
    username: "vishal",
    prices:199
}
function handalObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handalObject(user)
handalObject({
    username:"sam",
    price:399
})

const myNewArray = [200,400,100,600]

function retutnSecondValue(getArray){
    return getArray[1]
}
// console.log(retutnSecondValue(myNewArray));
console.log(retutnSecondValue([200,400,500,1000]));