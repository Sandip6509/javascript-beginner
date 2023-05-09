const name = "Sandeep";
const recordCount = 50;

// console.log(name + recordCount + "Value");

console.log(`My name is ${name} and count is ${recordCount}`);

const gameName = new String('Sandeep');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne =" Sandeep ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://www.youtube.com/sandeep%20patel";

console.log(url.replace('%20','-'));
console.log(url.includes('sandeeeeeee'));