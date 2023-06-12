const coding = ['php','js','java','python'];

// coding.forEach(function (val){
//     console.log(val);
// })

// coding.forEach((item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        languageName: "Javascript",
        languageFile: "js"
    },
    {
        languageName: "PHP",
        languageFile: "php"
    },
    {
        languageName: "python",
        languageFile: "py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})