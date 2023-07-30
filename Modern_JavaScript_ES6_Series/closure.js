// let sum = function(a){
//     console.log(`live viewers ${a}`);
//     let c = 5;
//     return function(b){
//         return a+b+c;
//     }
// }
// let store = sum(120)
// console.log(store(5));

let sum = function(a,b,c){
    return{
        getTwo: function(){
            return a+b;
        },
        getThree: function(){
            return a+b+c;
        }
    }
}

let store = sum(5,8,9);
console.log(store.getTwo());
console.log(store.getThree());