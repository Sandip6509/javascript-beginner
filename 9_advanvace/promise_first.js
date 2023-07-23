const promiseOne = new Promise(function(reslove,reject){
    // Do an sync task
    // DB Calls, network
    setTimeout(function(){
        console.log('Task is completed');
        reslove();
    },1000);
});

promiseOne.then(function(){
    console.log("Promise consumed");
});

new Promise(function(reslove,reject){
    setTimeout(function(){
        console.log("Async Task 2");
        reslove();
    },1000);
}).then(function(){
    console.log('Async 2 resloved');
});

const promiseThree = new Promise(function(reslove,reject){
    setTimeout(function(){
        reslove({username: "Sandip6509",email:'sandip@gmail.com'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
});

const promiseFour = new Promise(function(reslove,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            reslove({username: "Sandip6509",email:'sandip@gmail.com'});
        } else {
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("This is finally"));

const promiseFive = new Promise(function(reslove,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            reslove({username: "Sandip6509",email:'sandip@gmail.com'});
        } else {
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);        
    }
}

consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);        
//     }
// }

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));