const coding = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach( (item) => {
    console.log(item);
    return item
} )

console.log(values); // return undefined

/* this returns "undefined" because forEach() is designed only for iterating over arrays — it doesn’t create a new array or collect return values.

The return value from the callback is ignored — JavaScript does not store it anywhere.

After finishing, forEach() itself just returns undefined.

So, no matter what you return inside the callback. It will always return undefined. */



// FILTER

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4 ) // this will return the filtered elements according to the condition from the array

// Arrow Function

// const newNums = myNums.filter( (num) => {
//     return num > 4 // you will have to use return because of the use of {}, since it creates scope
// } )


// But if you only want to use for-each loop then how ?

const newNums = []

myNums.forEach((num) => {
    if(num>4){
        newNums.push(num);
    }
})
console.log(newNums) // still gets the same output



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// que1. Print all the 'History' genre books

let userName = books.filter((bk) =>bk.genre==='History')


//que2. Print all the books whose published year is greater than 1995 and genre is 'History'

userName = books.filter( (bk) => {
    return bk.publish > 1995 && bk.genre === 'History'
}) 

console.log(userName)





