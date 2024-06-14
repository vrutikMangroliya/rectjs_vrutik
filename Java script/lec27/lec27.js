// Javascript Promises

// const Promise1 = new Promise(function(resolve , reject){

// })

// new Promise(function(resolve,reject){

// })

// function print(){
//     console.log("Hello Javascript");
// }

// setTimeout(print , 3000);

// function prints(){
//     console.log("Hello Javascript");
// }

// setInterval(prints , 1000);

// let Promise1 = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("hello promises!");
//         resolve()
//     }, 2000)
// })

// Promise1.then(() => {
//     console.log('Promise Consume!');
// })

// let Promise1 = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("hello promises!");
//         resolve()
//     }, 2000)
// }).then(() => {
//     console.log('Promise Consume!');
// })

// let Promise1 = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve({username:"preet" , email:'preet@gmail.com'})
//     }, 2000)
// }).then((user) => {
//     console.log(user);
//     console.log('Promise Consume!');
//     return user.username
// }).then((item) => {
//     console.log(item);
// })

let Promise1 = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username:"preet" , email:'preet@gmail.com'})
        }
        else{
            reject('Promise Rejected')
        }
    }, 2000)
}).then((user) => {
    console.log(user);
    console.log('Promise Consume!');
    return user.username
}).then((item) => {
    console.log(item);
}).catch((error) => {
    console.log(error);
})