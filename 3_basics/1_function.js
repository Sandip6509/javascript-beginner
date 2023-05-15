
function myName(){
    console.log("Sandeep Patel");
}

// myName();

function addTwoNumber(number1, number2){
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
}

const result = addTwoNumber(3, 8);

// console.log("result: ",result);

function logginUserMessage(username){
    if(!username){
        console.log("please enter username");
        return;
    }
    return `${username} just logged in`;
}

// console.log(logginUserMessage("Sandeep"));

// console.log(logginUserMessage())

function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(200,400,800));