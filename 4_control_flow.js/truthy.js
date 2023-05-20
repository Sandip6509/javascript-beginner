const userEmail = "";

if(userEmail){
    console.log('Got email');
}else{
    console.log(`Don't have email `);
}

// falsy value

// false, 0, -0, BigInt 0n,"",null, undefined,NaN

// truthy values
// "0",'false'," ",[],{},function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {};

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish Collescing operator (??) null undefined

let val;
// val = 5 ?? 10;
// val = null ?? 10;
val = undefined ?? 15;
val = null ?? 10 ?? 20;

// console.log(val);

// Ternary Opertor
// condition ? true : false

const teaPrice = 100;

teaPrice <= 80 ? console.log(`less than 80`) : console.log(`more than 80`);