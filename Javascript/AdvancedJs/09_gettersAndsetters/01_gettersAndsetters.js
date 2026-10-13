class User{

    constructor(username, password, email){
        this.username=username
        this.password=password
        this.email=email

    }

    get username(){
        return this._username.toUpperCase()
    }
    set username(value){ 
        this._username=value;
    }

    get email(){
    return this._email.toLowerCase()
     }


    set email(val){
        this._email=val
    }
}
const usersInfo = new User("shrutika" , "123" , "SHRUTIKA@123")
// console.log(usersInfo.username)
console.log(usersInfo.email)



