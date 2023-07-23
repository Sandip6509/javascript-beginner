// let myName = "Sandeep      ";
// let myChamp = "Javascript      ";

// console.log(myName.length);

let myHeros = ["spiderman","ironman","thor"]

let heroPower = {
    spiderman: "sling",
    ironman: "iron shuit",
    thor: "hammer",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.sam = function(){
    console.log('sam all object');
}
Array.prototype.heySam = function(){
    console.log('Sam sey Hello');
}
// heroPower.sam();
// myHeros.sam()
// myHeros.heySam()


// Inheritance

const User = {
    name: "Sam",
    email: "sam@mail.com"
}

const Teacher = {
    makeVideo: true
}

const TechingSupport = {
  isAvailable: false 
}

const TASupport ={
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__:TechingSupport
}

Teacher.__proto__ = User;

// modern syntex
Object.setPrototypeOf(TechingSupport,Teacher);
let anotherUserName = "Javascript Code     ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
}

anotherUserName.trueLength();
"Sandy".trueLength();
"Java".trueLength();