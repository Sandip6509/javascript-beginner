let a = 200;
const b = 100;
var c = 400;

if(true){
    let a = 20;
    const b = 100;
    // console.log("inner", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Sandeep";

    function two(){
        const website ="google.com";
        console.log(username);
    }
    // console.log(website);

    two();
}

// one();

if(true){
    const username = "Deep";
    if(username === "Deep"){
        const website = "facebook";
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// =================== interesting ==================

console.log(addOne(4));
function addOne(num){
    return num + 1;
}


console.log(addTwo(5));
const addTwo = function(num){
    return num + 2;
}
