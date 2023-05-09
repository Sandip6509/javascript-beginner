//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);

// Reference (Non primitive)

// Array, Objects, Functions
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) Heap(Non-Primitive)

let myName ="SandipPatel";

let anotherName = myName;
anotherName = "sasasasasa"

console.log(myName);
console.log(anotherName);

let userOne ={
    email : "user@goggle.com",
    upi : "user@ybl"
}

let userTwo = userOne;

userTwo.email = "sandip@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);