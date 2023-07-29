// ES6

class User {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`;
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }
}

const sandy = new User("sandy","sandy@gmail.com","123456");

console.log(sandy.encryptPassword());
console.log(sandy.changeUsername());