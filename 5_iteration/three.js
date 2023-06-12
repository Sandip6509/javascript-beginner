// for of

// ["","","",""]
// [{},{},{},{}]

const arr = [1,2,3,4,5];

for(const val of arr){
    // console.log(val);
}

const greetings = "Hello Sandeep";

for(const str of greetings){
    // console.log(str);
}

// map

const map = new Map();
map.set('IN','India');
map.set('PK','Pakistan');
map.set('GR','Germany');
map.set('IN','India');

// console.log(map);

for (const [key,value] of map) {
    // console.log(key,':-',value);
}

const myObject = {
    'game1' : 'Cricket',
    'game2' : 'Football',
    'game3' : 'Hockey',
    'game4' : 'Kabbadi'
}

// for (const [key,value] of myObject) {
//     console.log(key,':-',value);
// }