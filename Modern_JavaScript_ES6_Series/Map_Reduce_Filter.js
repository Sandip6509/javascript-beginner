// Higher order function

// forEach
// filter
// map
// sort
// reduce

const companies =[
    {name:"Google",category:"Product Based",start:1981, end:2004},
    {name:"Amazon",category:"Product Based",start:1991, end:2008},
    {name:"Paytm",category:"Service Based",start:1999, end:2008},
    {name:"Mindtree",category:"Product Based",start:1989, end:2005},
    {name:"Wallmart",category:"Product Based",start:1988, end:2010},
];

const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];

// forEach
// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);    
// }

// companies.forEach(function(company,index){
//     console.log(company);
// })

// companies.forEach((company, index) => (console.log(company.name)));

// Filter
// for (let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 20){
//         console.log(ages[i]);    
//     }
// }

// const age = ages.filter(function(age){
//     if(age >= 20){
//         return true;
//     }
// });

// console.log(age);

// const finalAge = ages.filter((age,index)=> age >= 30);
// console.log(finalAge);

// const sb = companies.filter((company)=>{
//     if(company.category === 'Service Based'){
//         return true;
//     }
// });
// console.log(sb);

// const sb = companies.filter(company => company.category === 'Service Based');
// console.log(sb);

// map function
// const dummy = companies.map((company,index)=>{
//    return `${company.name}  ${company.category}`;
// })
// console.log(dummy);

// Sort
// const sorted = companies.sort((c1,c2) => c1.start < c2.start ? 1 : -1);
// console.log(sorted);

// const sortedAge = ages.sort((a,b) => (b - a));
// console.log(sortedAge);

// reduce
let total = 0;

// for (let i = 0; i < ages.length; i++) {
//     total+=ages[i];    
// }

// console.log(total);

// const sumage = ages.reduce(function(total,age){
//     return total+age;
// },0)
const sumage = ages.reduce((total,age)=> total+age,0);
console.log(sumage);