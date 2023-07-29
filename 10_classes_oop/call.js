function SetUsername(username){
    // Complex DB calls
    this.username = username;
}

function createUser(username,email,password){
    SetUsername(username);
    this.email = email;
    this.password = password;
}

const sandy = new createUser("Sandeep","sandeep@gmail.com","12345678");

console.log(sandy);