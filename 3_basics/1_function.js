
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

// console.log(calculateCartPrice(200,400,800,2000));

const user ={
    username: "Sandeep",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));