console.log("start")

setTimeout(() => {
    console.log("setTimeout function")
}, 5000);
fetch('https://api.github.com/users/shrutika-dhanad')
.then(()=>{
    console.log("fetch Api ")
})
console.log("End")