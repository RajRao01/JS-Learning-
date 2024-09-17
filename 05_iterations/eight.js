const myNums = [1 , 2, 3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)

const myTotal = myNums.reduce((acc,curr) => acc+curr,0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName:"js cource",
        price:2999
        
    },

    {
        itemName:"py cource",
        price:299
     },


    {
        itemName:" mobile development cource",
        price:477
    },
    {

         itemName:"web development cource",
         price:399
    },
]

const priceTopay = shoppingCart.reduce((acc,item) => acc + item.price,0)

console.log(priceTopay);