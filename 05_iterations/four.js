// for-in loop

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key); // it will displays the keys only. Yes, array also have keys the indexes are keys of array those are numbers by default unlike 
    // object where keys can be anything
}


for (const key in programming) {
    console.log(programming[key]) // now this will display the values 
}


// NOTE: the main difference between for-of and for-in loop is that for-of loops direct values deta hai means loops over only values of iterable object while 
// for-in loop key/indexes of an object


// MAP is not iterable in for-in loop because A Map is not a plain object with enumerable properties — it stores data internally in a special structure,
// not as normal keys.
