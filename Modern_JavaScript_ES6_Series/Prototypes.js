// Proto Types

const obj ={
    name: "Sandeep",
    getName:function(){
        return this.name;
    },
    getRoll:function(){
        return this.roll;
    }
}

// console.log(obj);

const obj2 = {
    roll: 12,
    name:"Sarita",
    __proto__:obj
}
// console.log(obj2.getRoll());

const obj3 = {
    class: "MCA",
    __proto__:obj2
}

// console.log(obj3.getName());
const array1 = ['Sandip'];
console.log(array1);

const object = new Object();
console.log(object);

const array =new Array();
console.log(array);