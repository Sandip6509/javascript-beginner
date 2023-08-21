// 1 Giving a string, reverse each word in sentense.
let str = `Shayad meri shaadi ka khayal Dil mein aaya hai Isiliye mummy ne meri tumhe Choda tha ghar pe`;
const storeStr = str.split(` `).map(function (word) {
  return word.split("").reverse().join("");
});
console.log(storeStr.join(" "));
// 2 how to check if an object is an array or not? Provide some code.
function checkArray(elem) {
  return Array.isArray(elem);
}
console.log(checkArray([]));
console.log(checkArray({}));
// 3 How to empty an array in javascript?
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.length = 0;
console.log(arr);

// 4 How would you check if a number is an integer?
let num = 125;

if (num % 1 === 0) {
  console.log("Integer");
} else {
  console.log("Not Integer");
}
// 5 make this work duplicate() pass array duplicate array
function duplicate(arr) {
  return arr.concat(arr);
}

console.log(duplicate([1, 2, 3, 4, 5]));

// Functions
// 6 Write javascript function that reverse a number
// Method1
function reverseNumber(num) {
  return Number(num.toString().split("").reverse().join(""));
}
console.log(reverseNumber(125));

// Method2

function reverseNum(num) {
  let rev = 0;
  while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  return rev;
}
console.log(reverseNum(45566666));

// 7 Write a javascript function that check whether a passed string is palindrome o  not

function stringPalChecker(str) {
  let reversed = str.split("").reverse().join("");
  if (reversed === str) return true;
  else return false;
}

console.log(stringPalChecker("BoB"));
console.log(stringPalChecker("Book"));

// 8 Write a javascript function return a passed string with letters in alphabetical order

function stringAlphaBeticalOrder(str) {
  return str.split("").sort().join("");
}

console.log(stringAlphaBeticalOrder("water"));
console.log(stringAlphaBeticalOrder("drink"));

// 9 Write a javascript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

function capitalizeStr(str) {
  let allword = str.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.substring(1);
  });

  return allword.join("");
}
console.log(capitalizeStr("this is books sasasa"));

//  10 Write a javascript function which accepts an argument and return the type
function typeTeller(elem){
  return typeof elem;
}
console.log(typeTeller([]));
console.log(typeTeller(12));
console.log(typeTeller("12"));
console.log(typeTeller(true));
console.log(typeTeller(undefined));
console.log(typeTeller(function () {}));
// 11 Write a javascript function to get the number of occurrencies of each letter in specified string

function occ(str){
  let occurrences ={}
  str.split("").forEach(element => {
    if(occurrences.hasOwnProperty(element) === false){
      occurrences[element] = 1;
    }else{
      occurrences[element]++;
    }
  });
  return occurrences;
}

console.log(occ("orangess"));

// loops

// Loop an array and add all members of it

let loopArray = [1,3,3,4,5,6,8,9];
let sum = 0;
loopArray.forEach((elem)=>{
  sum = sum + elem;
})
console.log(sum);
// in an array of number and strings,only add those members which are not strings

let arrayOne = ['hi',125,'hello',5,'wooo','wow',78];
let oneSum = 0;
arrayOne.forEach((elem) => {
  if(typeof elem === 'number'){
    oneSum = oneSum + elem;
  }
})
console.log(oneSum);

// loop an array of objects and remove all objectes which don't have gender's value male
let objData = [
  {name: 'sandeep',gender:'male'},
  {name: 'sarita',gender:'female'},
  {name: 'waws',gender:'none'},
  {name: 'shanvi',gender:'female'},
  {name: 'sanaya',gender:'female'}
]
// objData.filter((elem)=>{
//   return elem.gender === 'male'
// })
let count = 0;
objData.forEach((elem)=>{
  if(elem.gender !== 'male') count++;
});

for (let i = 0; i <= count; i++) {
  for (let j = 0; j < objData.length; j++) {
    if(objData[j].gender !== "male"){
      objData.splice(j,1)
    }  
  }
}
console.log(objData);
// Array
// Write a javascript function to clone an array
function cloneArray(arr){
  // method 1
  // let newArr = [];
  // arr.forEach((e)=>{
  //   newArr.push(e);
  // });
  // return newArr;
  // method 2
  return arr.map((e)=>{
    return e;
  });
}
let ar = [1,2,3];
let newarr = cloneArray(ar);
console.log(newarr);
// Write a javascript function to get the first elememt of an array. Passing a parameter 'n' will return first 'n' elements of the array.
// Write a javascript function to get the last elememt of an array. Passing a parameter 'n' will return last 'n' elements of the array.
