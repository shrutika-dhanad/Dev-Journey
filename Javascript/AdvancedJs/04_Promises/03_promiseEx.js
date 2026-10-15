let myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("promise is fullfilled");
  } else {
    reject("promise is rejected");
  }
});

console.log(myPromise);

Promise.resolve(10)
  .then((value) => {
    console.log(value);
    return value * 2;
  })
  .then((result) => {
    console.log(result);
  });
// Promise.reject("something went wrong")
// .catch((error)=>{
//     console.log(error)
// })

const p1 = Promise.resolve("java");
const p2 = Promise.resolve("Ruby");
const p3 = Promise.resolve("C++");

Promise.all([p1, p2, p3]).then((result) => {
  console.log(result);
});

// allSettled

Promise.allSettled([Promise.resolve("succed"),
         Promise.reject("failed")
])
         .then((result)=>{
            console.log(result)
         })



         const s1= new Promise(resolve =>{
            setTimeout(() => {
                resolve("first")
            },1000);
         })
         const s2 = new Promise(reject =>{
            setTimeout(() => {
                resolve("second")
            }, 2000);
         })

         Promise.race([s1,s2]).then(console.log)