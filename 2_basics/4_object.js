// const zoomUser = new Object(): // singleton

const zoomUser = {};

zoomUser.id = "148aws";
zoomUser.name = "Sandip";
zoomUser.isloggedIn = false;

// console.log(zoomUser);

const regulerUser = {
    email: "some@mail.com",
    fullname :{
        userfullname:{
            firstname: 'Sandeep',
            lastname: 'Patel'
        }
    }
};

// console.log(regulerUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"a",4:"b"};

// const obj3 = { obj1, obj2};
// const obj3 =  Object.assign({},obj1, obj2);

const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "sam@mail.com",
    },
    {
        id: 2,
        email: "sam@mail.com",
    },
    {
        id: 3,
        email: "sam@mail.com",
    }
]

users[1].email;
console.log(zoomUser);

console.log(Object.keys(zoomUser));
console.log(Object.values(zoomUser));
console.log(Object.entries(zoomUser));

console.log(zoomUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName: "JS in Hindi",
    price: 999,
    instructor: "Sandeep"
}

console.log(course.instructor);

const {instructor} = course;

console.log(instructor);