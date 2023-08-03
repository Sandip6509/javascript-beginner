// Event Bubbling, Capturing and Propagation

var div = document.querySelector("div");
var button = document.querySelector("button");
var a = document.querySelector("a");

div.addEventListener('click',() =>{
    console.log(div);
});

button.addEventListener('click',(event) =>{
    console.log(button);
});
button.addEventListener('click',(event) =>{
    event.stopImmediatePropagation();
});
a.addEventListener('click',(event) =>{
    event.preventDefault();
});