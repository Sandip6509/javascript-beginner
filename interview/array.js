// Array Original Property Looping

Array.prototype.extraProperty = "Sandeep";

const newArray = [1,2,3,4,5];

for(let v in newArray){
    if(newArray.hasOwnProperty(v)){
        console.log(v);
    }
}