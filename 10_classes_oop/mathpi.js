// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const des = Object.getOwnPropertyDescriptor(Math,"PI");

// console.log(des);

const tea = {
    name: 'Lemon Tea',
    price: 250,
    isAvailable: true,
    orderTea: function(){
        console.log('Tea not ava');
    }
}

// console.log(Object.getOwnPropertyDescriptor(tea,"name"));

Object.defineProperty(tea,'name',{
    writable: false,
    enumerable: false
});
// console.log(Object.getOwnPropertyDescriptor(tea,"name"));

for (let [key,value] of Object.entries(tea)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}