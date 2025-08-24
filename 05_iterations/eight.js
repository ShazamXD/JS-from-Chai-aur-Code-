// REDUCE

/* When you need a single result (sum, product, object, merged data) from an array.

When .map() or .filter() alone can’t do the job. */

const myNums = [1,2,3]

const totalSum = myNums.reduce(function (accumulator, currentValue){
    console.log(`acc: ${accumulator} and currVal: ${currentValue}`);
    return accumulator + currentValue
}, 0) // this '0' gets stored in accumulator as it initial value 

console.log(totalSum)

// accumalator store every value after each iteration of 'accumulator + currentValue'. But, since it initially don't store any value so we assign 
// intial value '0' to it after the {} and it keeps updating with each iteration

// ARROW FUNCTION

const myTotal = myNums.reduce((acc, currVal) => acc+currVal, 0)

console.log(myTotal)


// EXAMPLE:

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "dsa course",
        price: 4999
    },
    {
        itemName: "ml course",
        price: 6999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay); // first it was showing wrong output because instead of adding, concatenation happened because i wrote price as string 
// datatype("") instead of numbers
