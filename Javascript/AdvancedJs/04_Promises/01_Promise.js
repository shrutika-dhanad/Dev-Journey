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



const promiseFour= new Promise(function(resolve, reject){
    setTimeout(function(){
     let error=false;
     if(!error){
      resolve({username:"shrutika dhanad" ,password: "11222" , age: "21"})
     }else{
        reject("Error: Something went Wrong");
     }
    },1000)
})


promiseFour.then((user)=>{
  return user.password;
}).then((password)=>{
    console.log(password)
  
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("The promise is either resolved or rejected...")
});




const promiseFive= new Promise(function(resolve,reject){
    setTimeout(function(){
       let error=false;
       if(!error){
        resolve({username:"pritesh", password:"1236"})
       }else{
        reject("ERROR: Something went Wrong..")
       }
       
    },1000)
});
async function consumedPromiseFive(){


    try{
    const response=await promiseFive;
    console.log(response)
    }catch(error){
     console.log(error)
    }
} 

consumedPromiseFive()