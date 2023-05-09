// Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreateDate = new Date(2023,0,25);
// let myCreateDate = new Date(2023,0,25,5,3);
// let myCreateDate = new Date('2023-01-25');
let myCreateDate = new Date('01-15-2023');
// console.log(myCreateDate.toDateString());
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday : "long",
});