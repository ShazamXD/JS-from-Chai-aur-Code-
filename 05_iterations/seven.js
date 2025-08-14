const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => { return num + 10})


// CHAINING: using multiple operation in one function

const newNums = myNumbers
                .map((nums) => nums*10)
                .map((nums) => nums + 1)
                .filter((nums) => {return nums>40}) // arrow function spotted

console.log(newNums);