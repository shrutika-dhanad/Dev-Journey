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
console.log(user)