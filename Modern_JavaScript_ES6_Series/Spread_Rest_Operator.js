// ES6
// Rest & Spread Operator
// Rest Example

function addNumber(a,b,c,...other){
    console.log(other);
    return a+b+c+other;
}

const res = addNumber(4,5,6,8,10,78,87);

// console.log(res);

// Spread Example
let names = ["sandeep","sarita","dipak"];

function getName(name1,name2,name3){
    console.log(name1,name2,name3);
}
// getName(name[0],name[1],name[2]);
getName(...names);
// getName(name);

// Object with rest
var student = {
    name: "sandy",
    age: 32,
    hobbies:["football","vloging"]
}
// const age = student.age;
const {age, name} = student;
console.log(age,name);

// Object with spread
var newStudent = {
    ...student,
    age: 58
}
console.log(newStudent);