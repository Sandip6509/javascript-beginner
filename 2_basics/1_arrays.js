// Array

const myArray = [0,1,2,3,4,5];
const myHeros = ["shaktiman","nagraj"];
const myArray2 = new Array(1,2,3,4);
// console.log(myArray[0]);

// Array Method

// myArray.push(6);
// myArray.push(7);
// myArray.pop();

// myArray.unshift(9);
// myArray.shift();

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(19));

// const newArr = myArray.join()
// console.log(myArray);
// console.log(typeof newArr);

// slice splice
console.log("A",myArray);

const myN1 = myArray.slice(1,3);
console.log(myN1);
console.log("C ",myArray);

const myN2 = myArray.splice(1,3);
console.log("D ",myArray);
console.log(myN2);