const users={
    username:"shrutika",
    loginCount:5,
    singedIn: true,

    getUserDetails: function(){
        console.log(this.username)
        // console.log(this)

     }
}
console.log(users.getUserDetails())

console.log(this)



//constructor function

function userDetails(username, userId, isLoggedIn){
    this.username= username;
    this.userId= userId;
    this.isLoggedIn= isLoggedIn;
}
const user=  new userDetails("shruti", 1 , true)
const user2=  new userDetails("pritesh", 2 ,false)

console.log(user)
console.log(user2)


console.log(user instanceof userDetails)
console.log(user instanceof object)
