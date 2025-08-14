// for-each loop

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )


// Arrow Function

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe) 
// sirf reference dena hai function ka execute nhi krna hai isiliye "printMe" likha sirf naa ki "printMe()"


coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )
// print the item, it's index and the entire array


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName); //returns languageName of each object. Here, items denote the objects inside the array
} )
