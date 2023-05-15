// singleton
// object.create
// object literals

const mySym = Symbol('key1');
const user = {
    name:"Sandeep",
    "full name": "Sandeep Patel",
    [mySym]: 'myKey1',
    age: 30,
    location: "Ahmedabad",
    email: "sandeep@mail.com",
    isLoggenIn: false,
    lastLoginDays: ['sunday','monday']
};

// console.log(user.email);
// console.log(user['email']);
// console.log(user['full name']);
// console.log(user[mySym]);

user.email = "Sandeep@gmail.com";
Object.freeze(user)
user.email = "sandeep@chatgpt.com";
// console.log(user);

user.greeting = function(){
    console.log("Hello JS user");
}

user.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(user.greeting());
console.log(user.greetingTwo());