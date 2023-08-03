// Currying in JavaScript

// function Addition(a,b,c){
//     return a+b+c;
// }

// let res = Addition(9,8,5);
// console.log(res);

function Addition(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
// let res = Addition(9);
// let data = res(4);
// let data1 = data(78);
// let res = Addition(9)(5)(56);
// console.log(res);

userObj = {
    name:"Sandeep",
    age: 32
}

function userInfo(obj){
    return function(userinfo){
        return obj[userinfo];
    }
}

let res = userInfo(userObj);
console.log(res('age'));