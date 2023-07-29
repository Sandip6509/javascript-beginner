class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return '123';
    }
}

const hello = new User("Deep");

console.log(hello.createId());

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email = email
    }
}

const phone = new Teacher('phone','i@phone.com');
// console.log(phone.createId());