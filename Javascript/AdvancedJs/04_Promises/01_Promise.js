const myPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
      console.log("task is completed..")
      resolve()
    },1000)
}).then(function(){
    console.log("promise is consumed..")
})

new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("async task 2")
        resolve();
    }, 1000);
}).then(function(){
    console.log("async 2 consumed..")
})



const thirdPromise= new Promise(function(resolve, reject){
setTimeout(function(){
    console.log("hello")
    resolve({username:"shrutika" , password: "123654"})
},1000)
}).then(function(user){
    console.log(user)
})