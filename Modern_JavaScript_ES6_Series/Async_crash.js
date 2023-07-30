// Async js programing
// Callbacks, Promises, Async & await

let datas = [
    {name: "Dev", developer:"Php"},
    {name: "Sam", developer:"Javascript"}
];

function getDatas(){
    setTimeout(()=>{
        let output= '';
        datas.forEach((data,index)=>{
            output+=`<li>${data.name}</li>`;
        })
        document.body.innerHTML = output;
    },1000);
}

function createData(newData){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            datas.push(newData);
            let error =  datas.length ? true : false ;
            if(error){
                reslove();
            }else{
                reject('Something went wrong.');
            }
        },2000);
    });
}

/*createData({name: "Sonu", developer:"Java"})
.then(getDatas)
.catch(error => document.body.innerHTML = error);
*/

// Async && await

async function start(){
   await createData({name: "Sonu", developer:"Java"})
   getDatas();
}
start();