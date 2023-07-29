const User = {
    _email: 'sam@mail.com',
    _password: "pass123",
    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    },
    get password(){
        return this._password.toUpperCase()
    },
    set password(value){
        this._password = value
    }
}

const hdd = Object.create(User);

console.log(hdd.email,'test',hdd.password);