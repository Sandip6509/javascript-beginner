// Apply, Call & Bind

// Problem

let userDetails = {
    name: "Sandeep Patel",
    age: 32,
    Designation:"Software Engineer",
}
let printDetails = function(state,country){
    console.log(`${this.name} ${state} ${country}`);
}

printDetails.call(userDetails,"Ahmedabad","India");

let userDetails2 = {
    name: "Sarita Patel",
    age: 32,
    Designation:"Software Engineer",
}
// fuction borrowing
printDetails.call(userDetails2,"UP","India");

// Apply
printDetails.apply(userDetails2,["UP","India"]);

// Bind
let newFun = printDetails.bind(userDetails,"Ahmedabad111","555India");
newFun();