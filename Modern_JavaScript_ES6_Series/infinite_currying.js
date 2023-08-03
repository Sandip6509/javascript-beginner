// Infinite Currying in JavaScript

function add(a){
    return function(b){
        if(b) return add(a+b);
        return a;
    }
}
console.log(add(4)(8)(5)(1)(2)(3)(4)());