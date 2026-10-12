function setUserName(username){
    this.username=username
    console.log("called..")
}
function getuserDetails(username,email,isLoggedIn){ 
    setUserName.call(this,username)
    this.email=email;
    this.isLoggedIn=isLoggedIn
}
const user= new getuserDetails("shrutika", "shrt@ex.com", true)
console.log(user);


function myname(name){
    this.name=name;
}

function personalDetails(name, age, email){

    myname.call(this,name)

    this.age= age;
    this.email=email;
    console.log("personal details  found")

}

const details=  new personalDetails("shruu", 21 , "emial@ex.com")

console.log(details)