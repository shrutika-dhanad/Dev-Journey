console.log("start")

setTimeout(() => {
    console.log("setTimeout function")
}, 5000);
fetch('https://api.github.com/users/shrutika-dhanad')
.then(()=>{
    console.log("fetch Api ")
})
console.log("End")


console.log("hii shrutika")
setTimeout(() => {
    console.log("good morning Shrutika")
}, 0);



fetch('https://api.github.com/users/shrutika-dhanad')
.then(()=>{
    console.log("good evening")
}).then(()=>{
    console.log("good night")
}).catch((error)=>{
    console.log(error)
})
console.log("Bye shrutiakaaa")
