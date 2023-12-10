const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log('Promise Consumed');
})

//seccond method of making promise
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task two');
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 resolved');
})

//third promise
const promiseThree= new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username : "Chai", email: "chai@example.com"})
    }, 1000);
})

promiseThree.then(function(user){
console.log(user);
})

//fourth promise
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username: 'Hitesh', password:'123'})
        } else{
            reject('ERROR! SOMETHING WENT WRONG')
        }
    }, 1000);
})

 promiseFour
 .then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(()=> console.log('The promise is either resolved or rejected'))

//promise 5

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username: 'javascript', password:'123'})
        } else{
            reject('ERROR! JS WENT WRONG')
        }
    }, 1000);
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
    console.log(response);
    } catch(e){
        console.log(e);
    }
}
consumePromiseFive();


// async function getallusers(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//    const data = await response.json()
//    console.log(data);
    
//    } catch (error) {
//     console.log("E: ", error);
//    }
// }

// getallusers()

fetch('https://api.github.com/users/vikrant-vasu')
.then((response)=>{
    return response.json()
})
.then(function(bla){
    console.log(bla);
})
.catch((error)=>{console.log(error);})