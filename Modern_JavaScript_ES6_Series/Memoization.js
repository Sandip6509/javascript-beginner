//  Memoization

let sum = 0;

const calc = (n) => {
    for (let i = 0; i <=n; i++) {
        sum+=i;        
    }
    return sum;
}

const memoize = (fun) => {
    let cache = {};
    return function(...args){
        let n = args[0];
        if(n in cache){
            console.log('cache');
            return cache[n];
        }else{
            console.log('fgfgf else');
            let result = fun(n);
            cache[n] = result;
            return result;
        }
    }
} 
const eff =memoize(calc);
console.log(eff(50));
console.log(eff(50));

