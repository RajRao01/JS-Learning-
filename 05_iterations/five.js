const coding = ["js","ruby","java","python","cpp"]

// coding.forEach(function (value) {
//     console.log(value);
// });

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe (item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach ((item,index,arr)=> {
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        languageName: "java",
        languagefileName:"js"
    },
    {
        languageName: "python",
        languagefileName:"py"
    },
    {
        languageName: "c++",
        languagefileName:"cpp"
    },
    {
        languageName: "ruby",
        languagefileName:"rs"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})
