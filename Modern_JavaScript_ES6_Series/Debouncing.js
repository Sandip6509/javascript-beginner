// Debouncing in JavaScript
let counter = 0;
function getData(){
    console.log("feching data"+counter++);
}

function myDebounce(call,d){
    let timer;
    return function(...args){
        if(timer) clearTimeout(timer);
        timer = setTimeout(() =>{
            call();
        },d);
    }
}

const betFun = myDebounce(getData,5000);

const mythrottle = (fn,d) =>{
    return function(...args){
        document.getElementById('myid').disabled=true;
        setTimeout(()=>{
            fn();
        },d)
    }
}

const newFun = mythrottle(()=>{
    document.getElementById('myid').disabled=false;
    console.log("User click");
},5000);