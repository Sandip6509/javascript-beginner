// Collection of properties and method
const user = {
    username: "Sandeep",
    loginCount: 8,
    SignedIn: true,

    getUseDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUseDetails());
// console.log(this);

function User(username,loginCount,isLoggenIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggenIn = isLoggenIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this;
}

const userOne = new User("Sandeep",12, true);
const userTwo = new User("sarita",15, true);

console.log(userOne.constructor);
// console.log(userTwo);