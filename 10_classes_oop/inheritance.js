class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const sam = new Teacher('sandeep6509','sandeep@mail.com','1234');

sam.addCourse();

const thisMe = new User("7805Sandeep");

thisMe.logMe();

console.log(sam instanceof User);