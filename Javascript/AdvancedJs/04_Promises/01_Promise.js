const myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("task is completed..");
    resolve();
  }, 1000);
}).then(function () {
  console.log("promise is consumed..");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async 2 consumed..");
});

const thirdPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("hello");
    resolve({ username: "shrutika", password: "123654" });
  }, 1000);
}).then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "shrutika dhanad", password: "11222", age: "21" });
    } else {
      reject("Error: Something went Wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    return user.password;
  })
  .then((password) => {
    console.log(password);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected...");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "pritesh", password: "1236" });
    } else {
      reject("ERROR: Something went Wrong..");
    }
  }, 1000);
});
async function consumedPromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumedPromiseFive();

const promiseSix = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Promise is created");
    resolve({ userId: "110", name: "shrutika", age: "21" });
  }, 1000);
});
promiseSix
  .then((user) => {
    return user.userId;
  })
  .then((username) => {
    console.log("promise 6 is consumed..");
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("finally its completed..");
  });

async function getUserDetails() {
  try {
    let respose = await fetch("https://jsonplaceholder.typicode.com/comments");
    let data = await respose.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getUserDetails();


fetch('https://jsonplaceholder.typicode.com/comments')
.then((response)=>{
  return response.json();
}).then((response_data)=>{
    console.log(response_data)
}).catch((error)=>{
    console.log("Error :" , error)
})