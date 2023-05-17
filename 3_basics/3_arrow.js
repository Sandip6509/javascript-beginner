
const user = {
    username: "Deepak",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "welccc";
// user.welcomeMessage();

// console.log(this);

// function sam(){
//      let username ="weweew";
//      console.log(this);
// }
// sam();

const sam = () => {
    let username ="weweew";
    console.log(this);
}

// sam();

// const addTwo = (num1,num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1,num2) => num1 + num2;
// const addTwo = (num1,num2) => (num1 + num2);
const addTwo = (num1,num2) => ({username: "assaasas"});
console.log(addTwo(4,8));

const myArray = [2,5,8,4,40];