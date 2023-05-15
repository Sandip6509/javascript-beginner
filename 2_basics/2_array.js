const marvelHeros = ["thor","ironman","spiderman"];
const dcHeros = ["superman","flash",'batman'];

// marvelHeros.push(dcHeros);

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros);

const newHeros = [...marvelHeros,...dcHeros];
console.log(newHeros);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const realArray = anotherArray.flat(Infinity);
console.log(realArray);

console.log(Array.isArray("Sandeep"));
console.log(Array.from("Sandeep"));
console.log(Array.from({name: "Sandeep"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));