// if

const isUserloggedIn = true;
const temperature = 45
// if(temperature === 40){
//     console.log('less than 50');
// }else{
//     console.log("temperature is greater then 50");
// }
// console.log('sasasa');
// <,>,<=,>=,==,!=,===,!==

const score = 500;

// if(score >100){
//     let power = 'batman';
//     console.log(`Test Power: ${power}`);
// }
// console.log(`Test Power: ${power}`);

const amount = 5000;

// if(amount >4500) console.log('aaaa');

// if(amount < 1000){
//     console.log('less then 400');
// }else if(amount < 4500){
//     console.log('less them 4500');
// }else if(amount < 4900){
//     console.log('less then 4900');
// }else{
//     console.log('less than 6000');
// }

const userloggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if(userloggedIn && debitCard){
    console.log('buy product');
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log('user login in');
}