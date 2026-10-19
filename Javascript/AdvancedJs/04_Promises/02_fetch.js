// fetch('https://jsonplaceholder.typicode.com/comments')
// .then((response)=>{
//   return response.json();
// }).then((response_data)=>{
//     console.log(response_data)
// }).catch((error)=>{
//     console.log("Error :" , error)
// })

// async function getAllUsers(params) {
//   const response = await fetch("https://jsonplaceholder.typicode.com/comments");
//   const data = await response.json();
//   console.log(data);
// }
// getAllUsers();

fetch("https://api.github.com/users/shrutika-dhanad")
  .then((resposes) => {
    return resposes.json();
  })
  .then((data) => {
    console.log(data);
  });

async function getData(params) {
  try {
    const resposes = await fetch(
      "https://api.github.com/users/shrutika-dhanad",
    );

    const data = await resposes.json();
  } catch (error) {
    console.log(error);
  }
}
getData();

