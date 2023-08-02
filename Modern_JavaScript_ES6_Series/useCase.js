// Map, set, WeakSet, WeakMap
"use strict";

// Set
// It Contains only unique values
// Object constructor

let myArray = [1,2,3,4,5,6,7];
let obj = new Set(myArray);
obj.add(50);
obj.add(1000);

obj.delete(50);
// console.log(obj);
var obj1 ={name:"Deepak"};
// obj.add(obj1);
// console.log(obj);
// console.log(obj.has(120));

// for (let new1 of obj) {
//     console.log(new1);
// }

// obj.forEach((element) =>{
//     console.log(element);
// })
// map => key && value

let myMap = new Map([["a1","atharva"],["b1","bhavesh"]]);
myMap.set("c1","Suraj");
// console.log(myMap.get("a1"));

// for (let [key,value] of myMap) {
//     console.log(`key: ${key} value: ${value}`);
// }

// myMap.forEach((key,value) => {
//     console.log(key,value);
// })

// Weakset
// only store object
// it can not be interated
let ws = new WeakSet();
var obj1 = {"name":"Tiger"};
var obj2 = {};
ws.add(obj1);
ws.add(obj2);
// console.log(ws.has(obj1));

// WeakMap
let wm = new WeakMap();
var obj3 = {"name":"Sandip"};
var obj4 = {};
wm.set(obj3,"Private");
wm.set(obj4,"Private data");
console.log(wm.has(obj4));